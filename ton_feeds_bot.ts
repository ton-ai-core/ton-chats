#!/usr/bin/env ts-node
/**
 * ton_feeds_bot.ts
 * UserBot in TypeScript to collect messages from Telegram chats
 */

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import { TelegramClient } from "telegram";
import { StringSession }    from "telegram/sessions";
import { Api }              from "telegram";
import fs                   from "fs";
import path                 from "path";
import promptSync           from "prompt-sync";
import bigInt               from 'big-integer'; // Import bigInt
import { Entity }           from "telegram/define";
// Removed incorrect ChatFull import

// === Configuration ===
const API_ID = Number(process.env.TG_API_ID);
const API_HASH = process.env.TG_API_HASH!;
const PHONE_NUMBER = process.env.TG_PHONE;
if (!API_ID || !API_HASH) {
  console.error("Error: Environment variables TG_API_ID and TG_API_HASH must be set.");
  process.exit(1);
}

const SESSION_FILE = "session.string";
const FEEDS_FILE = "feeds.json";
const STATE_FILE = "state.json";
const OUT_DIR = "./out";
const JSON_OUT_DIR = path.join(OUT_DIR, "json");
const MARKDOWN_OUT_DIR = path.join(OUT_DIR, "markdown");
const MAX_BYTES = 950 * 1024; // 950 KiB

// === Utilities ===
const prompt = promptSync();

// Removed unused cleanName function

// Create day header
function mkHeader(date: Date): string {
  // Format date as YYYY-MM-DD
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `— ${year}-${month}-${day} —\n\n`;
}

/**
 * Creates a directory if it does not exist.
 * @param dirPath Path to the directory.
 */
function ensureDirExists(dirPath: string): void {
    try {
        fs.mkdirSync(dirPath, { recursive: true });
    } catch (error: any) {
        // Ignore error if directory already exists
        if (error.code !== 'EEXIST') {
            console.error(`Failed to create directory ${dirPath}:`, error);
            throw error; // Re-throw other errors
        }
    }
}

/**
 * Splits a string into chunks by size and saves them to the specified directory.
 * @param targetDir Directory to save the files.
 * @param baseName Base file name (without extension).
 * @param content Content to write.
 * @param extension File extension (e.g., ".md").
 * @returns Array of created chunk file names.
 */
function writeChunks(targetDir: string, baseName: string, content: string, extension: string = ".md"): string[] {
  ensureDirExists(targetDir); // Ensure the directory exists
  const buffer = Buffer.from(content, "utf8");
  const len = buffer.length;
  const fileNameBase = `${baseName}${extension}`;
  const chunkNameBase = `${baseName}_part`;

  if (len <= MAX_BYTES) {
    const file = path.join(targetDir, fileNameBase);
    try {
        fs.writeFileSync(file, buffer);
        console.log(`Saved file: ${file} (${(len / 1024).toFixed(2)} KiB)`);
        return [file];
    } catch (error) {
         console.error(`Error writing file ${file}:`, error);
         return []; // Return empty array on write error
    }
  }

  const lines = content.split(/\r?\n/);
  const files: string[] = [];
  let currentChunk = "";
  let currentChunkSize = 0;
  let part = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineBuffer = Buffer.from(line + "\n", "utf8"); // Add newline size
    const lineSize = lineBuffer.length;

    // Ensure even a single line larger than MAX_BYTES gets written
    if (lineSize > MAX_BYTES) {
        console.warn(`Warning: A single line exceeds MAX_BYTES (${(lineSize / 1024).toFixed(2)} KiB). It will be saved in a separate chunk.`);
        // If there's content in the current chunk, write it first
        if (currentChunkSize > 0) {
            const chunkFileName = `${chunkNameBase}${part}${extension}`;
            const chunkFilePath = path.join(targetDir, chunkFileName);
            try {
                fs.writeFileSync(chunkFilePath, currentChunk, "utf8");
                console.log(`Saved chunk (before large line): ${chunkFilePath} (${(currentChunkSize / 1024).toFixed(2)} KiB)`);
                files.push(chunkFilePath);
            } catch (error) {
                 console.error(`Error writing chunk ${chunkFilePath}:`, error);
            }
            part++;
            currentChunk = "";
            currentChunkSize = 0;
        }
        // Write the large line to its own chunk
        const largeLineFileName = `${chunkNameBase}${part}${extension}`;
        const largeLineFilePath = path.join(targetDir, largeLineFileName);
         try {
            fs.writeFileSync(largeLineFilePath, line + "\n", "utf8");
            console.log(`Saved chunk (large line): ${largeLineFilePath} (${(lineSize / 1024).toFixed(2)} KiB)`);
            files.push(largeLineFilePath);
        } catch (error) {
             console.error(`Error writing chunk ${largeLineFilePath}:`, error);
        }
        part++;
        continue; // Skip adding this line to currentChunk below
    }

    if (currentChunkSize > 0 && currentChunkSize + lineSize > MAX_BYTES) {
      // Write current chunk before adding the new line
      const chunkFileName = `${chunkNameBase}${part}${extension}`;
      const chunkFilePath = path.join(targetDir, chunkFileName);
      try {
            fs.writeFileSync(chunkFilePath, currentChunk, "utf8");
            console.log(`Saved chunk: ${chunkFilePath} (${(currentChunkSize / 1024).toFixed(2)} KiB)`);
            files.push(chunkFilePath);
        } catch (error) {
             console.error(`Error writing chunk ${chunkFilePath}:`, error);
        }
      part++;
      currentChunk = "";
      currentChunkSize = 0;
    }

    currentChunk += line + "\n";
    currentChunkSize += lineSize;

    // Write the last chunk if it's the end of the lines
    if (i === lines.length - 1 && currentChunkSize > 0) {
        const chunkFileName = `${chunkNameBase}${part}${extension}`;
        const chunkFilePath = path.join(targetDir, chunkFileName);
        try {
            fs.writeFileSync(chunkFilePath, currentChunk, "utf8");
            console.log(`Saved chunk: ${chunkFilePath} (${(currentChunkSize / 1024).toFixed(2)} KiB)`);
            files.push(chunkFilePath);
        } catch (error) {
             console.error(`Error writing chunk ${chunkFilePath}:`, error);
        }
    }
  }

  return files;
}

// Loads or initializes JSON
function loadJSON<T>(file: string, def: T): T {
  try {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, "utf8");
      return JSON.parse(data) as T;
    } else {
      return def;
    }
  } catch (error) {
    console.error(`Error reading/parsing file ${file}:`, error);
    return def;
  }
}

// Saves JSON
function saveJSON<T>(file: string, data: T): void {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error(`Error writing file ${file}:`, error);
  }
}

/**
 * Loads state from JSON file.
 * @returns {State} State object.
 */
function loadState(): Record<string, number> { // Changed return type annotation
  if (fs.existsSync(STATE_FILE)) {
    const data = fs.readFileSync(STATE_FILE, "utf-8");
    try {
      const state = JSON.parse(data);
      // Ensure state is an object
      if (typeof state !== 'object' || state === null) {
          console.warn(`State file ${STATE_FILE} has invalid format, returning default state.`);
          return {};
      }
      // Ensure all values are numbers (or default to 0)
       for (const key in state) {
           if (typeof state[key] !== 'number') {
               console.warn(`Invalid lastId for chat ${key} in state file, defaulting to 0.`);
               state[key] = 0;
           }
       }
      return state;
    } catch (error) {
      console.error(`Error parsing ${STATE_FILE}:`, error);
      // Return default state if parsing fails
      return {};
    }
  }
  return {};
}

/**
 * Saves state to JSON file.
 * @param {State} state State object to save.
 */
function saveState(state: Record<string, number>): void {
  saveJSON(STATE_FILE, state);
  console.log(`🔄 Final state saved to ${STATE_FILE}`);
}

/**
 * Attempts to join the specified chats/channels.
 * @param {TelegramClient} client - Telegram client.
 * @param {string[]} chatLinks - Array of chat links or @usernames.
 */
async function joinChats(client: TelegramClient, chatLinks: string[]) {
  console.log("\n=== Attempting to join chats ===");
  for (const link of chatLinks) {
    try {
      console.log(`Processing: ${link}`);
      // Try to recognize as invite link
      const inviteMatch = link.match(/^(?:https?:\/\/)?t(?:elegram)?\.me\/\+([\w-]+)/i);
      if (inviteMatch) {
        const inviteHash = inviteMatch[1];
        console.log(` -> Recognized as invite link, hash: ${inviteHash}`);
        try {
          await client.invoke(new Api.messages.ImportChatInvite({ hash: inviteHash }));
          console.log(` -> Successfully joined via invite link: ${link}`);
        } catch (error: any) {
          if (error.errorMessage === 'USER_ALREADY_PARTICIPANT') {
            console.log(` -> Already a participant (via invite link): ${link}`);
          } else if (error.errorMessage === 'INVITE_HASH_EXPIRED') {
            console.warn(` -> Error: Invite link expired: ${link}`);
          } else if (error.errorMessage === 'INVITE_HASH_INVALID') {
             console.warn(` -> Error: Invalid invite link: ${link}`);
          } else if (error.errorMessage === 'CHANNELS_TOO_MUCH') {
            console.error(` -> Error: Telegram limit for channels/supergroups reached.`);
            throw error; // Re-throw to stop potentially joining more
          } else if (error.errorMessage === 'USERS_TOO_MUCH') {
             console.error(` -> Error: Telegram limit for chats reached.`);
             throw error; // Re-throw
          }
           else {
            console.warn(` -> Failed to join via invite link ${link}:`, error.errorMessage || error.message);
          }
        }
      } else {
        // Handle as username or public link
         let username = link;
         const urlMatch = link.match(/^(?:https?:\/\/)?t(?:elegram)?\.me\/([\w_]{5,})$/i);
         if (urlMatch) {
           username = urlMatch[1];
         }
         console.log(` -> Attempting to join public chat/channel: @${username}`);
         try {
           const entity = await client.getInputEntity(username);
           // Use JoinChannel, as ImportChatInvite is not suitable for public ones
           await client.invoke(new Api.channels.JoinChannel({ channel: entity }));
           console.log(` -> Successfully joined: @${username}`);
         } catch (error: any) {
           if (error.errorMessage === 'USER_ALREADY_PARTICIPANT') {
             console.log(` -> Already a participant: @${username}`);
           } else if (error.errorMessage === 'CHANNELS_TOO_MUCH') {
             console.error(` -> Error: Telegram limit for channels/supergroups reached.`);
             throw error; // Re-throw
           } else if (error.errorMessage === 'USERS_TOO_MUCH') {
              console.error(` -> Error: Telegram limit for chats reached.`);
              throw error; // Re-throw
           } else if (error.errorMessage === 'USERNAME_INVALID' || error.errorMessage === 'USERNAME_NOT_OCCUPIED') {
               console.warn(` -> Error: Invalid username or chat/channel not found: @${username}`);
           } else if (error.errorMessage === 'INVITE_REQUEST_SENT') {
               console.log(` -> Join request sent for: @${username} (requires admin approval)`);
           }
            else {
             console.warn(` -> Failed to join @${username}:`, error.errorMessage || error.message);
           }
         }
      }
    } catch (error: any) {
      console.error(`Critical error processing ${link}:`, error.errorMessage || error.message);
       if (error.errorMessage === 'CHANNELS_TOO_MUCH' || error.errorMessage === 'USERS_TOO_MUCH') {
         console.error("Telegram limit reached. Stopping join attempts.");
         break; // Stop trying to join more chats
       }
      // Continue with the next chat if the error is not critical for limits
    }
     // Small delay between attempts to avoid flooding
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  console.log("=== Chat join check completed ===");
}

/**
 * Gets the name of a user or chat from a Peer entity.
 * @param peer Peer entity (User, Chat, Channel).
 * @param users Map of users from GetHistory response.
 * @param chats Map of chats from GetHistory response.
 * @returns Name or identifier.
 */
function getPeerName(peer: Api.TypePeer | undefined, users: Map<string, Api.User>, chats: Map<string, Api.Chat | Api.Channel>): string {
    if (!peer) return "Unknown";

    if (peer instanceof Api.PeerUser) {
        const user = users.get(peer.userId.toString());
        return user?.firstName || user?.username || `User<${peer.userId}>`;
    }
    if (peer instanceof Api.PeerChat) {
        const chat = chats.get(peer.chatId.toString());
        return (chat instanceof Api.Chat && chat.title) || `Chat<${peer.chatId}>`;
    }
    if (peer instanceof Api.PeerChannel) {
        const chat = chats.get(peer.channelId.toString());
        return (chat instanceof Api.Channel && chat.title) || `Channel<${peer.channelId}>`;
    }
    return "Unknown Peer Type";
}

/**
 * Converts an array of messages to JSON similar to Telegram export.
 * @param messages Array of Api.Message messages.
 * @param users Map of users from GetHistory.
 * @param chats Map of chats from GetHistory.
 * @param chatEntity The main chat entity.
 * @param fullChatInfo Full chat information.
 * @returns JSON object.
 */
function formatMessagesToJson(
    messages: Api.Message[],
    users: Map<string, Api.User>,
    chats: Map<string, Api.Chat | Api.Channel>,
    chatEntity: Entity,
    fullChatInfo: Api.messages.ChatFull | null
): object {
    const chatHistory: any = {
        id: chatEntity.id.toString(),
        name: "Unknown Chat",
        type: "unknown",
        messages: []
    };

    // Determine chat name and type
    if (fullChatInfo?.fullChat) {
        const full = fullChatInfo.fullChat;
        if (full instanceof Api.ChatFull) {
            chatHistory.name = full.about || `Chat<${chatEntity.id}>`; // Use about or fallback
            chatHistory.type = full.participants instanceof Api.ChatParticipants ? "private_group" : "personal_chat"; // Approximation
        } else if (full instanceof Api.ChannelFull) {
            chatHistory.name = full.about || `Channel<${chatEntity.id}>`; // Use about or fallback
            const channelInfo = chats.get(chatEntity.id.toString());
            if (channelInfo instanceof Api.Channel) {
                 chatHistory.name = channelInfo.title;
                 chatHistory.type = channelInfo.broadcast ? "public_channel" : "public_supergroup";
                 if (channelInfo.megagroup) chatHistory.type = "public_supergroup"; // More specific
                 if (!channelInfo.username) chatHistory.type = channelInfo.broadcast ? "private_channel" : "private_supergroup";
            }
        }
    }
    // Fallback using basic entity info if full info is missing
    else if (chatEntity instanceof Api.User) {
        chatHistory.name = chatEntity.firstName || chatEntity.username || `User<${chatEntity.id}>`;
        chatHistory.type = "personal_chat";
    } else if (chatEntity instanceof Api.Chat) {
        chatHistory.name = chatEntity.title || `Chat<${chatEntity.id}>`;
        chatHistory.type = "private_group"; // Or "group"
    } else if (chatEntity instanceof Api.Channel) {
        chatHistory.name = chatEntity.title || `Channel<${chatEntity.id}>`;
        chatHistory.type = chatEntity.broadcast ? "channel" : "supergroup"; // Simplified
    }

    for (const msg of messages) {
        if (!(msg instanceof Api.Message) || !msg.message) {
            continue; // Skip service messages or those without text
        }

        const senderId = msg.fromId;
        const senderName = getPeerName(senderId, users, chats);

        let textContent: string | object[] = msg.message;
        // TODO: Handle formatted text (msg.entities) for more accurate JSON

        const messageData: any = {
            id: msg.id,
            type: "message",
            date: new Date(msg.date * 1000).toISOString(),
            date_unixtime: msg.date.toString(),
            from: senderName,
            from_id: senderId ? (senderId instanceof Api.PeerUser ? `user${senderId.userId}` : (senderId instanceof Api.PeerChannel ? `channel${senderId.channelId}` : `chat${(senderId as Api.PeerChat).chatId}`)) : "unknown",
            text: textContent,
        };

        if (msg.replyTo?.replyToMsgId) {
            messageData.reply_to_message_id = msg.replyTo.replyToMsgId;
        }

        if (msg.fwdFrom?.fromId || msg.fwdFrom?.fromName) {
            messageData.forwarded_from = msg.fwdFrom.fromName || getPeerName(msg.fwdFrom.fromId, users, chats);
            const fwdFromId = msg.fwdFrom.fromId;
            if (fwdFromId) {
                 messageData.forwarded_from_id = fwdFromId instanceof Api.PeerUser ? `user${fwdFromId.userId}` : (fwdFromId instanceof Api.PeerChannel ? `channel${fwdFromId.channelId}` : `chat${(fwdFromId as Api.PeerChat).chatId}`);
            }
            if (msg.fwdFrom.date) {
                 messageData.forwarded_date = new Date(msg.fwdFrom.date * 1000).toISOString();
            }
        }

        // TODO: Handle media (photo, video, document, etc.) - requires downloading
        if (msg.media instanceof Api.MessageMediaPhoto && msg.media.photo instanceof Api.Photo) {
            messageData.media_type = "photo";
            // Placeholder for file path - requires downloading the photo
            messageData.file = `photos/photo_${msg.id}.jpg`;
            const photoSize = msg.media.photo.sizes.find(s => s instanceof Api.PhotoSizeProgressive);
             if (photoSize instanceof Api.PhotoSizeProgressive) {
                messageData.width = photoSize.w;
                messageData.height = photoSize.h;
            } else {
                // Sort by area (w * h) to find the largest size representation
                const largestSize = msg.media.photo.sizes
                    .filter((s): s is Api.PhotoSize | Api.PhotoSizeProgressive =>
                        (s instanceof Api.PhotoSize || s instanceof Api.PhotoSizeProgressive) && !!s.w && !!s.h
                    )
                    .sort((a, b) => (b.w * b.h) - (a.w * a.h))[0];

                 if (largestSize) { // Check if largestSize was found
                     messageData.width = largestSize.w;
                     messageData.height = largestSize.h;
                 }
            }
        }
        // Add more media types here (video, document, etc.) following a similar pattern


        chatHistory.messages.push(messageData);
    }

    // Sort messages by ID just in case
    chatHistory.messages.sort((a: any, b: any) => a.id - b.id);

    return chatHistory;
}

/**
 * Generates Markdown from chat history JSON data.
 * @param jsonData Object with chat data and messages.
 * @param baseName Base file name for output.
 * @param targetDir Directory to save the chat's MD files.
 * @returns Array of created Markdown file names.
 */
function generateMarkdownFromJson(jsonData: any, baseName: string, targetDir: string): string[] {
    let md = "";
    const grouped: Record<string, string[]> = {};

    if (!jsonData || !jsonData.messages || !Array.isArray(jsonData.messages)) {
        console.warn("Warning: Invalid JSON data format for Markdown generation.");
        return [];
    }

    // Add chat header
    md += `# ${jsonData.name} (ID: ${jsonData.id}, Type: ${jsonData.type})\n\n`;

    for (const msg of jsonData.messages) {
        if (typeof msg.text !== 'string') {
            // Skip messages without simple text (e.g., only media or complex entities)
            // TODO: Improve handling of non-text or formatted messages
            continue;
        }

        const date = new Date(msg.date);
        const dateKey = date.toISOString().slice(0, 10);
        grouped[dateKey] = grouped[dateKey] || [];

        let messageLine = `${msg.from}: ${msg.text.replace(/\r?\n/g, " ")}`;
        if (msg.reply_to_message_id) {
            messageLine += ` (reply to ${msg.reply_to_message_id})`;
        }
        if (msg.forwarded_from) {
             messageLine += ` (forwarded from ${msg.forwarded_from})`;
        }

        grouped[dateKey].push(messageLine);
    }

    const sortedDays = Object.keys(grouped).sort();
    for (const day of sortedDays) {
        const dayDate = new Date(day + "T00:00:00Z");
        md += mkHeader(dayDate);
        for (const line of grouped[day]) {
          md += line + "\n\n";
        }
    }

    return writeChunks(targetDir, baseName, md.trim(), ".md");
}

/**
 * Ensures Markdown files exist for a chat if the corresponding JSON exists.
 * Generates/overwrites MD from JSON.
 * @param baseName Base chat name (username or ID).
 */
async function ensureMarkdownExists(baseName: string): Promise<void> {
    console.log(`Checking/generating Markdown for ${baseName} from JSON...`);
    const jsonFilePath = path.join(JSON_OUT_DIR, `${baseName}.json`);
    const mdChatDir = path.join(MARKDOWN_OUT_DIR, baseName);

    if (fs.existsSync(jsonFilePath)) {
        console.log(`Found JSON file: ${jsonFilePath}`);
        // Try to load JSON
        let jsonData: any = null;
        try {
             jsonData = loadJSON<any>(jsonFilePath, null);
        } catch (loadError) {
             console.error(`Error loading JSON file ${jsonFilePath}:`, loadError);
             return; // Cannot continue without JSON
        }

        if (jsonData && typeof jsonData === 'object' && jsonData.messages) {
             console.log(`JSON loaded successfully, generating Markdown in ${mdChatDir}...`);
             try {
                // Ensure the target directory for MD exists
                ensureDirExists(mdChatDir);
                const mdFiles = generateMarkdownFromJson(jsonData, baseName, mdChatDir);
                if (mdFiles.length > 0) {
                    console.log(`Markdown files for ${baseName} successfully generated/overwritten: ${mdFiles.join(', ')}`);
                } else {
                    // This might happen if JSON is empty or has no messages with text
                    console.log(`Markdown files for ${baseName} were not generated (no suitable data in JSON?).`);
                }
            } catch (error) {
                console.error(`Error generating Markdown from ${jsonFilePath}:`, error);
            }
        } else {
            console.warn(`Loaded JSON file (${jsonFilePath}) has invalid format or is empty.`);
        }
    } else {
        console.log(`JSON file not found (${jsonFilePath}), Markdown cannot be generated.`);
    }
}

/**
 * Processes data for a single chat: saves JSON and generates Markdown.
 * @param historyMessages Array of new Api.Message messages.
 * @param usersMap Map of users.
 * @param chatsMap Map of chats/channels.
 * @param entity Chat entity.
 * @param client Telegram client.
 * @returns Object with the updated lastId for this chat, or null on error.
 */
async function processChatData(
    historyMessages: Api.Message[],
    usersMap: Map<string, Api.User>,
    chatsMap: Map<string, Api.Chat | Api.Channel>,
    entity: Entity,
    client: TelegramClient
): Promise<Record<string, number> | null> { // Returns {[chatId]: newLastId} or null
    const chatId = entity.id.toString();
    console.log(`Starting processing of ${historyMessages.length} new messages for chat ${chatId}...`);

    let fullChatInfo: Api.messages.ChatFull | null = null;
    try {
        // Request full chat info for details in JSON
        if (entity instanceof Api.Channel) {
            fullChatInfo = await client.invoke(new Api.channels.GetFullChannel({ channel: entity }));
        } else if (entity instanceof Api.Chat) {
            fullChatInfo = await client.invoke(new Api.messages.GetFullChat({ chatId: entity.id }));
        } else if (entity instanceof Api.User) {
             // No ChatFull for personal chats, use info from entity
        }
    } catch (err) {
        console.warn(`Failed to get full info for chat ${chatId}:`, err);
    }

    // 1. Format to JSON
    const jsonData = formatMessagesToJson(historyMessages, usersMap, chatsMap, entity, fullChatInfo);

    // File name based on username or ID
    let chatUsername: string | null | undefined = null;
    if (entity instanceof Api.Channel || entity instanceof Api.User) {
        chatUsername = entity.username;
    }
    const baseName = chatUsername || chatId; // Use username if available, otherwise chatId
    const jsonFileName = `${baseName}.json`;
    // Corrected path for JSON file
    const jsonFilePath = path.join(JSON_OUT_DIR, jsonFileName);
    const mdChatDir = path.join(MARKDOWN_OUT_DIR, baseName);

    // Create directories if they don't exist
    ensureDirExists(JSON_OUT_DIR);
    ensureDirExists(MARKDOWN_OUT_DIR);
    ensureDirExists(mdChatDir);

    // 2. Save JSON
    try {
       // Corrected path usage here
       fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), "utf8");
       console.log(`Saved JSON: ${jsonFilePath}`);
    } catch (error) {
       // Use the correct path in the error message
        console.error(`Error saving JSON ${jsonFilePath}:`, error);
        return null; // Do not update state if JSON saving failed
    }

    // 3. Generate Markdown from JSON
    try {
        // Pass the target directory for MD files
        const mdFiles = generateMarkdownFromJson(jsonData, baseName, mdChatDir);
        if (mdFiles.length > 0) {
            console.log(`Saved Markdown files: ${mdFiles.join(', ')}`);
        } else {
            console.log(`Markdown files were not generated (no valid data in JSON).`);
        }
    } catch (error) {
        console.error(`Error generating Markdown from ${jsonFilePath}:`, error);
        // Continue, but state will be updated since JSON was saved
    }

    // 4. Determine the new lastId to return
    const lastProcessedMessage = historyMessages.length > 0 ? historyMessages[historyMessages.length - 1] : null;
    if (lastProcessedMessage) {
        // Return object for state update in main
        return { [chatId]: lastProcessedMessage.id };
    } else {
        console.log(`Failed to determine last ID for state update (unexpected).`);
        return null; // Failed to determine ID
    }
}

/**
 * Main bot function.
 */
async function main() {
  console.log("Starting UserBot...");
  // 1. Initialize session: prefer env variable, fallback to file
  let sessionStr = process.env.TG_SESSION_STRING || "";
  if (!sessionStr && fs.existsSync(SESSION_FILE)) {
      try {
          console.log(`Reading session from file: ${SESSION_FILE}`);
          sessionStr = fs.readFileSync(SESSION_FILE, "utf8");
      } catch (error) {
          console.warn(`Could not read session file ${SESSION_FILE}:`, error);
          sessionStr = ""; // Ensure sessionStr is empty on read error
      }
  } else if (process.env.TG_SESSION_STRING) {
      console.log("Using session string from TG_SESSION_STRING environment variable.");
  }

  const client = new TelegramClient(
    new StringSession(sessionStr), API_ID, API_HASH, {
      connectionRetries: 5,
    }
  );

  try {
    await client.start({
      phoneNumber: async () => {
          if (PHONE_NUMBER) {
              console.log("Using phone number from environment variable.");
              return PHONE_NUMBER;
          }
          let phone = "";
          while (!phone) {
              phone = prompt("Enter phone number (+XXXXXXXXXXX): ");
          }
          return phone;
      },
      password: async () => {
          const pass = prompt("Enter 2FA password (if any, otherwise press Enter): ");
          return pass || ""; // Return empty string instead of undefined
      },
      phoneCode: async () => {
          let code = "";
          while (!code) {
              code = prompt("Enter the code from Telegram: ");
          }
          return code;
      },
      onError: (err) => {
          console.error("Authorization error:", err);
          throw err; // Re-throw to stop the process if auth fails
      },
    });

    // Save session to file only if running locally (not in GitHub Actions)
    if (process.env.GITHUB_ACTIONS !== 'true') {
         try {
            const currentSession = (client.session as StringSession).save();
             // Only write if the session is not empty
            if (currentSession) {
                 fs.writeFileSync(SESSION_FILE, currentSession, "utf8");
                 console.log(`Session saved to ${SESSION_FILE}`);
            } else {
                console.log("Session is empty, not writing to file.");
            }
         } catch (error) {
             console.error(`Failed to save session file ${SESSION_FILE}:`, error);
         }
    } else {
        console.log("Running in GitHub Actions, skipping session file save.");
    }

    console.log("✅ Successfully authorized!");

  } catch (error) {
      console.error("Critical authorization error. Exiting.");
      process.exit(1);
  }

  // 2. Read config and state
  const feeds = loadJSON<{ chats: string[] }>(FEEDS_FILE, { chats: [] });
  if (!feeds.chats || feeds.chats.length === 0) {
    console.warn(`File ${FEEDS_FILE} is empty or does not contain a list of chats. Please add chat links.`);
    await client.disconnect();
    return;
  }
  // Load initial state using the dedicated function
  let currentState = loadState();

  // === Attempt joining chats ===
  await joinChats(client, feeds.chats);

  // 3. Process each chat
  console.log(`\nStarting processing for ${feeds.chats.length} chats...`);
  let stateChanged = false; // Flag to track if state needs saving

  for (const link of feeds.chats) {
    console.log(`--- Processing chat: ${link} ---`);
    let entity: Entity | null = null;
    let baseName: string = link; // Default baseName to link
    try {
      entity = await client.getEntity(link);
      const chatId = entity.id.toString();

      // Determine base file name (username or ID)
      let chatUsername: string | null | undefined = null;
      if (entity instanceof Api.Channel || entity instanceof Api.User) {
          chatUsername = entity.username;
      }
      baseName = chatUsername || chatId; // Use username if available, otherwise chatId

      const lastId = currentState[chatId] || 0;
      console.log(`Chat ID: ${chatId} (baseName: ${baseName}), last known message: ${lastId}`);

      // Fetch new messages and related data
      const collectedMessages: Api.Message[] = [];
      const collectedUsers = new Map<string, Api.User>();
      const collectedChats = new Map<string, Api.Chat | Api.Channel>();

      let offsetId = 0;
      const limit = 100;
      let fetchedCount = 0;
      let isComplete = false;

      console.log(`Fetching messages newer than ${lastId}...`);
      while (!isComplete) {
        let history: Api.messages.TypeMessages | null = null;
        try {
             history = await client.invoke(
              new Api.messages.GetHistory({
                peer: entity,
                offsetId: offsetId,
                addOffset: 0,
                limit: limit,
                maxId: 0,
                minId: lastId + 1, // Fetch messages strictly newer than lastId
                hash: bigInt(0)
              })
            );
        } catch (histError: any) {
            console.error(`Error calling GetHistory for chat ${link} (offsetId: ${offsetId}):`, histError.message || histError);
             if (histError.code === 420) { // Flood Wait Error
                const seconds = histError.seconds || 30;
                console.warn(`Request limit exceeded (Flood control). Waiting ${seconds} seconds...`);
                await new Promise(resolve => setTimeout(resolve, seconds * 1000));
                continue; // Retry the same request
              } else if (histError.code === 400 && histError.message?.includes('CHANNEL_PRIVATE')) {
                  console.warn(`Cannot access private channel/group: ${link}. Bot must be a member.`);
                  isComplete = true; // Stop fetching for this chat
                  break;
              } else {
                  // Other errors might be temporary or indicate a bigger issue
                   console.warn(`Stopping fetching for ${link} due to unhandled GetHistory error.`);
                  isComplete = true; // Stop fetching on other errors for now
                  break;
              }
        }

        if (!history || !(
            history instanceof Api.messages.MessagesSlice ||
            history instanceof Api.messages.Messages ||
            history instanceof Api.messages.ChannelMessages
        )) {
            console.warn(`Unexpected or empty response from GetHistory for chat ${link}:`, history?.constructor?.name);
            isComplete = true;
            break;
        }

        const currentMessages = history.messages.filter((m): m is Api.Message => m instanceof Api.Message);
        const currentUsers = history.users.filter((u): u is Api.User => u instanceof Api.User);
        const currentChats = history.chats.filter((c): c is Api.Chat | Api.Channel => c instanceof Api.Chat || c instanceof Api.Channel);

         // Merge users and chats into our maps
        currentUsers.forEach(u => collectedUsers.set(u.id.toString(), u));
        currentChats.forEach(c => collectedChats.set(c.id.toString(), c));

        if (!currentMessages.length) {
          console.log("No new messages in this batch or end of history reached.");
          isComplete = true;
          break;
        }

        fetchedCount += currentMessages.length;
        collectedMessages.push(...currentMessages);
        const lastMessageInBatch = currentMessages[currentMessages.length - 1];
        offsetId = lastMessageInBatch.id;

        console.log(`Fetched ${currentMessages.length} messages (total ${fetchedCount})... Last ID in batch: ${offsetId}`);

        // Check if the history response indicates it's the last slice
        if (history instanceof Api.messages.Messages && !(history instanceof Api.messages.MessagesSlice)) {
            console.log("GetHistory returned Api.messages.Messages, assuming end of history.");
            isComplete = true;
        } else if (history instanceof Api.messages.MessagesSlice && currentMessages.length < limit) {
             console.log("Received fewer messages than limit, assuming end of history for this iteration.");
            isComplete = true;
        }

        // Basic FloodWaitError avoidance
        await new Promise(resolve => setTimeout(resolve, 700)); // Slightly increased delay
      }
      // End of while loop for fetching messages

      if (!collectedMessages.length) {
         console.log(`No NEW messages to process in chat ${link}.`);
         // Try to generate MD from existing JSON
         await ensureMarkdownExists(baseName); // baseName is now accessible here
      } else {
          // Sort collected messages by ID just in case
          collectedMessages.sort((a, b) => a.id - b.id);

          // Process the collected data
          const stateUpdate = await processChatData(
              collectedMessages,
              collectedUsers,
              collectedChats,
              entity,
              client
          );

          if (stateUpdate) {
            const newLastId = stateUpdate[chatId];
            if (newLastId > (currentState[chatId] || 0)) { // Update only if ID increased
                currentState[chatId] = newLastId;
                stateChanged = true;
                console.log(`State for ${chatId} will be updated to ${newLastId}`);
            } else {
                console.log(`State for ${chatId} does not require update (${newLastId} <= ${currentState[chatId] || 0})`);
            }

          } else {
            console.error(`Processing NEW data for chat ${link} failed. State not updated.`);
          }
      }

    } catch (error: any) {
      console.error(`Critical error processing chat ${link}:`, error.message || error);
      if (entity && error.code === 400 && error.message && error.message.includes('PEER_ID_INVALID')) {
          console.warn(`Maybe the bot was kicked from chat ${link} or the chat was deleted.`);
      }
      // Continue to the next chat even if one fails critically
    }
    console.log(`--- Finished processing chat: ${link} ---\n`);
    // Add a delay between processing different chats
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  // 4. Save final state if changed
  if (stateChanged) {
    saveState(currentState);
  } else {
      console.log(`State was not changed, file ${STATE_FILE} not overwritten.`);
  }

  await client.disconnect();
  console.log("UserBot disconnected.");
}

main().catch(err => {
  console.error("Critical error in main:", err);
  process.exit(1);
}); 