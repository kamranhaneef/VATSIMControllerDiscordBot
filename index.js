const fetch = require('node-fetch');
const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const API_URL = "https://data.vatsim.net/v3/vatsim-data.json";

// Store the online state of the controllers
let controllersOnline = {};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  checkControllers();
  setInterval(checkControllers, 10000); // Check every 10 seconds, adjust to your needs
});

async function checkControllers() {
  const response = await fetch(API_URL);
  const data = await response.json();

  const newControllersOnline = {};

  for (const controller of data.controllers) {
    if (controller.callsign.startsWith('EG')) {
      newControllersOnline[controller.callsign] = true;
      if (!controllersOnline[controller.callsign]) {
        // This controller just came online
        client.channels.cache.get('YOUR_CHANNEL_ID').send(`${controller.callsign} is online!`); // replace with your channel id
      }
    }
  }

  for (const controllerCallsign in controllersOnline) {
    if (!newControllersOnline[controllerCallsign]) {
      // This controller just went offline
      client.channels.cache.get('YOUR_CHANNEL_ID').send(`${controllerCallsign} is offline.`);  // replace with your channel id
    }
  }

  controllersOnline = newControllersOnline;
}

client.login('YOUR_BOT_TOKEN'); // replace with your bot token
