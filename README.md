
Project includes webpage and telegram bot. 

Website uses GithubAPI to fetch user's repositories on GitHub and reveals them in list of blocks, containing repo name and button that refers to its' page. First of all, it designed to work inside of TelegramWebApp.

Bot has only one command: on "/start" command he answers with message with inline keyboard button to start TelegramWebApp linked to this website.

Quick Start

1. Open CLI and navigate to root with "cd c://users/{username}/..."
2. Enter the command "npm install".
3. Through CLI use "cd vite".
4. Enter the command "npm run build" to build Vite project. "dist" folder will be created with compiled project in it.
5. Created folder has to be uploaded to any web-hosting.
6. In "bot.js" specify your own API_KEY and URL values. Use @BotFather to get your api key. Url has to be as given by your web-hosting.
7. Launch the "bot.js" file.