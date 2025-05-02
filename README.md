# TON Feeds Bot

A Telegram UserBot written in TypeScript to automatically fetch new messages from a predefined list of chats and save them into structured `JSON` and `Markdown` files.

## Features

-   Connects to Telegram using user credentials (API ID, Hash, Session String).
-   Reads a list of target chat links or usernames from `feeds.json`.
-   Automatically attempts to join specified public chats/channels if not already a member.
-   Fetches only new messages since the last run, tracking state in `state.json`.
-   Saves the complete fetched history (including message details, users, chat info) for each chat into individual JSON files in `out/json/`.
-   Generates daily-grouped Markdown files from the JSON data, saved in `out/markdown/<chat_name>/`.
-   Splits large Markdown files into chunks (default max size ~950 KiB).
-   Configured to run via GitHub Actions (see `.github/workflows/run_bot.yml`).
    -   Reads session string from `TG_SESSION_STRING` secret.
    -   Commits updated files in the `out/` directory back to the repository.

## Setup

1.  **Clone the repository.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment:**
    -   Create a `.env` file in the root directory (this file is ignored by git).
    -   Add your Telegram API credentials:
        ```dotenv
        # Get from https://my.telegram.org/apps
        TG_API_ID=YOUR_API_ID
        TG_API_HASH=YOUR_API_HASH
        # Optional: Add phone number if needed for login
        # TG_PHONE=+1234567890
        ```
4.  **Configure Feeds:**
    -   Edit `feeds.json` to list the target chat links or usernames:
        ```json
        {
          "chats": [
            "https://t.me/some_public_chat",
            "another_channel_username"
          ]
        }
        ```
5.  **Initial Login & Session Generation:**
    -   Run the bot locally for the first time:
        ```bash
        npm start
        ```
    -   Follow the prompts to enter your phone number (if not in `.env`), login code, and 2FA password (if applicable).
    -   A `session.string` file will be created. **Keep this file secure!**

## Running Locally

```bash
npm start
```

The bot will connect, fetch new messages, and save JSON/Markdown files to the `out/` directory.

## GitHub Actions Setup

1.  **Add Secrets:** Go to your repository's `Settings` -> `Secrets and variables` -> `Actions` and add the following repository secrets:
    *   `TG_API_ID`: Your Telegram API ID.
    *   `TG_API_HASH`: Your Telegram API Hash.
    *   `TG_SESSION_STRING`: The **entire content** of your generated `session.string` file (copy and paste it).
    *   `TG_PHONE` (Optional): Your phone number if you prefer to pass it via secrets.
2.  **Enable Actions:** Ensure GitHub Actions are enabled for your repository.
3.  **Trigger:** The workflow in `.github/workflows/run_bot.yml` is configured to run:
    *   On a schedule (daily at 3:00 AM UTC by default).
    *   Manually via the "Actions" tab (`workflow_dispatch`).

The workflow will use the provided secrets to run the bot and commit any changes in the `out/` directory back to the main branch.

## Output Structure

```
out/
├── json/
│   ├── chat1_id.json
│   └── chat2_username.json
└── markdown/
    ├── chat1_id/
    │   ├── chat1_id.md             # (if not chunked)
    │   └── chat1_id_part1.md       # (or chunks)
    └── chat2_username/
        └── chat2_username_part1.md
```