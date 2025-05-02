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

// Interface for the structure returned by formatMessagesToJson
interface ChatHistoryJson {
    id: string;
    name: string;
    type: string;
    messages: { id: number; [key: string]: any }[]; // Basic structure for messages array
}

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
 * Gets the last message ID from the existing JSON file for a chat.
 * WARNING: Reading and parsing large JSON files can be very slow and memory-intensive.
 * @param baseName Base name of the chat (username or ID).
 * @returns The last message ID found, or 0 if not found or on error.
 */
function getLastIdFromJson(baseName: string): number {
    const jsonFilePath = path.join(JSON_OUT_DIR, `${baseName}.json`);
    console.log(`Attempting to read last ID from ${jsonFilePath}...`);

    if (!fs.existsSync(jsonFilePath)) {
        console.log(`JSON file not found. Starting from message ID 0.`);
        return 0;
    }

    try {
        // WARNING: Reading potentially huge files into memory!
        const fileContent = fs.readFileSync(jsonFilePath, "utf8");
        if (!fileContent) {
             console.log(`JSON file is empty. Starting from message ID 0.`);
            return 0;
        }

        // WARNING: Parsing potentially huge JSON objects!
        const jsonData = JSON.parse(fileContent);

        if (!jsonData || !Array.isArray(jsonData.messages) || jsonData.messages.length === 0) {
            console.log(`JSON data is invalid or contains no messages. Starting from message ID 0.`);
            return 0;
        }

        // Find the maximum ID
        let maxId = 0;
        for (const message of jsonData.messages) {
            if (message && typeof message.id === 'number' && message.id > maxId) {
                maxId = message.id;
            }
        }
        console.log(`Found last message ID: ${maxId}`);
        return maxId;

    } catch (error) {
        console.error(`Error reading or parsing JSON file ${jsonFilePath} to get last ID:`, error);
        console.log(`Starting from message ID 0 due to error.`);
        return 0;
    }
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
): ChatHistoryJson {
    const chatHistory: ChatHistoryJson = {
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
 * This function now appends/updates the JSON file instead of relying on external state.
 * @param historyMessages Array of new Api.Message messages.
 * @param usersMap Map of users.
 * @param chatsMap Map of chats/channels.
 * @param entity Chat entity.
 * @param client Telegram client.
 * @returns {Promise<void>} Completes when processing is done.
 */
async function processChatData(
    historyMessages: Api.Message[],
    usersMap: Map<string, Api.User>,
    chatsMap: Map<string, Api.Chat | Api.Channel>,
    entity: Entity,
    client: TelegramClient
): Promise<void> { // No longer returns state update
    const chatId = entity.id.toString();
    console.log(`Starting processing of ${historyMessages.length} new messages for chat ${chatId}...`);

    // Determine base name for files
    let chatUsername: string | null | undefined = null;
    if (entity instanceof Api.Channel || entity instanceof Api.User) {
        chatUsername = entity.username;
    }
    const baseName = chatUsername || chatId;
    const jsonFilePath = path.join(JSON_OUT_DIR, `${baseName}.json`);
    const mdChatDir = path.join(MARKDOWN_OUT_DIR, baseName);

    // Ensure output directories exist
    ensureDirExists(JSON_OUT_DIR);
    ensureDirExists(MARKDOWN_OUT_DIR);
    ensureDirExists(mdChatDir);

    // --- Load existing JSON data --- 
    let existingJsonData: ChatHistoryJson | null = null;
    if (fs.existsSync(jsonFilePath)) {
        console.log(`Loading existing JSON data from ${jsonFilePath}...`);
        try {
            const existingContent = fs.readFileSync(jsonFilePath, "utf8");
            if (existingContent) {
                existingJsonData = JSON.parse(existingContent) as ChatHistoryJson;
            }
        } catch (error) {
             console.error(`Error reading existing JSON ${jsonFilePath}:`, error);
             existingJsonData = null;
        }
    }

    // --- Get Full Chat Info (only needed if creating JSON from scratch or updating meta) ---
    let fullChatInfo: Api.messages.ChatFull | null = null;
    if (!existingJsonData || !existingJsonData.name || existingJsonData.name === 'Unknown Chat') { 
         try {
             console.log(`Fetching full chat info for ${chatId}...`);
            if (entity instanceof Api.Channel) {
                fullChatInfo = await client.invoke(new Api.channels.GetFullChannel({ channel: entity }));
            } else if (entity instanceof Api.Chat) {
                fullChatInfo = await client.invoke(new Api.messages.GetFullChat({ chatId: entity.id }));
            } else if (entity instanceof Api.User) {
                // No ChatFull for personal chats
            }
        } catch (err) {
            console.warn(`Failed to get full info for chat ${chatId}:`, err);
        }
    }

    // --- Format *new* messages to JSON structure ---
    const newJsonData = formatMessagesToJson(historyMessages, usersMap, chatsMap, entity, fullChatInfo);

    // --- Merge new messages with existing JSON data --- 
    let finalJsonData: ChatHistoryJson;
    if (existingJsonData && Array.isArray(existingJsonData.messages)) {
        console.log(`Merging ${newJsonData.messages.length} new messages with ${existingJsonData.messages.length} existing messages.`);
        const existingIds = new Set(existingJsonData.messages.map((m) => m.id));
        const uniqueNewMessages = newJsonData.messages.filter((m) => !existingIds.has(m.id));

        existingJsonData.messages.push(...uniqueNewMessages);
        existingJsonData.messages.sort((a, b) => a.id - b.id);
        if (fullChatInfo && (!existingJsonData.name || existingJsonData.name === 'Unknown Chat')){
             existingJsonData.name = newJsonData.name;
             existingJsonData.type = newJsonData.type;
        }
        finalJsonData = existingJsonData;
        console.log(`Total messages after merge: ${finalJsonData.messages.length}`);
    } else {
        console.log(`No valid existing JSON found or messages array missing, using only newly fetched messages.`);
        finalJsonData = newJsonData;
    }

    // 2. Save final JSON
    try {
       fs.writeFileSync(jsonFilePath, JSON.stringify(finalJsonData, null, 2), "utf8");
       console.log(`Saved final JSON: ${jsonFilePath}`);
    } catch (error) {
        console.error(`Error saving final JSON ${jsonFilePath}:`, error);
        // If saving fails, we cannot proceed reliably with MD generation for this run
        return; 
    }

    // 3. Generate Markdown from the *final* JSON data
    try {
        const mdFiles = generateMarkdownFromJson(finalJsonData, baseName, mdChatDir);
        if (mdFiles.length > 0) {
            console.log(`Saved Markdown files: ${mdFiles.join(', ')}`);
        } else {
            console.log(`Markdown files were not generated (no valid data in JSON).`);
        }
    } catch (error) {
        console.error(`Error generating Markdown from ${jsonFilePath}:`, error);
    }

     console.log(`Finished processing for chat ${chatId}.`);
    // No state to return
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

  // 2. Read config
  const feeds = loadJSON<{ chats: string[] }>(FEEDS_FILE, { chats: [] });
  if (!feeds.chats || feeds.chats.length === 0) {
    console.warn(`File ${FEEDS_FILE} is empty or does not contain a list of chats. Please add chat links.`);
    await client.disconnect();
    return;
  }

  // === Attempt joining chats ===
  await joinChats(client, feeds.chats);

  // 3. Process each chat
  console.log(`\nStarting processing for ${feeds.chats.length} chats...`);

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

      // Get last ID by reading the large JSON file
      const lastId = getLastIdFromJson(baseName);
      console.log(`Chat ID: ${chatId} (baseName: ${baseName}), starting fetch after message ID: ${lastId}`);

      // Fetch new messages and related data
      const collectedMessages: Api.Message[] = [];
      const collectedUsers = new Map<string, Api.User>();
      const collectedChats = new Map<string, Api.Chat | Api.Channel>();

      let offsetId = 0; // Offset for GetHistory pagination, always start from 0
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
                offsetId: offsetId, // Use 0 for first request, then last message ID of batch
                addOffset: 0,
                limit: limit,
                maxId: 0,           // Fetch messages older than offsetId
                minId: lastId + 1, // Fetch messages strictly newer than lastId from JSON
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
         // We still might want to regenerate MD if JSON exists, even if no new messages
         await ensureMarkdownExists(baseName);
      } else {
          // Sort collected messages by ID just in case
          collectedMessages.sort((a, b) => a.id - b.id);

          // Process the collected data - this now handles merging and saving
          await processChatData(
              collectedMessages,
              collectedUsers,
              collectedChats,
              entity,
              client
          );
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

  await client.disconnect();
  console.log("UserBot disconnected.");
}

main().catch(err => {
  console.error("Critical error in main:", err);
  process.exit(1);
}); 