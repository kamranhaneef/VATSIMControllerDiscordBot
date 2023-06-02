
Description:
This is a Discord bot built in NodeJS which queries VATSIM Data from VATSIM API: https://data.vatsim.net/v3/vatsim-data.json
It does not need any authentication as it an open API.


Run Instructions

Before running project you need: 

Step 1: Install Node.js and npm
Node.js is a JavaScript runtime that you can use to run JavaScript on your computer, and npm is a package manager that makes it easy to install JavaScript libraries. You can download Node.js and npm from this link: https://nodejs.org/.

Step 2: Create Your Bot on the Discord Developer Portal
Go to the Discord Developer Portal (https://discord.com/developers/applications) and create a new application. You can name it whatever you want. After creating the application, go to the Bot tab and click "Add Bot". This will create a new bot for your application.

Step 3: Get Your Bot Token
Under the bot settings, you'll see a token. This is what your bot uses to log into Discord. Keep it safe and never share it with anyone. You can copy this token and use it in your code.

Step 4: Invite Your Bot to Your Server
In the OAuth2 tab, you can create a URL to invite your bot to your server. Choose "bot" under "scopes" and then under "Bot Permissions" choose the permissions your bot needs and then copy the generated URL. Open the URL in your web browser to add your bot to a server you have admin access to.

1. Clone the project
2. Replace YOUR_BOT_TOKEN with Bot token.
3. Replace YOUR_CHANNEL_ID with you Discord Channel ID
4. Save and Run :-)

Note: 
Replace 'YOUR_BOT_TOKEN' with your bot token and 'YOUR_CHANNEL_ID' with the ID of the channel where you want the bot to send messages.

This bot will check the API every 10 seconds and send a message when a controller with a callsign starting with 'EG' comes online or goes offline. It uses an object to keep track of the online state of each controller.