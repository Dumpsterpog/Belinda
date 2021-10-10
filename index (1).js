const { Client, Collection } = require("discord.js");
const client = new Client({
  intents: 32767,
  partials: ["CHANNEL"],
});

const {
  DiscordTogether
} = require('discord-together');

client.discordTogether = new DiscordTogether(client);
module.exports = client;
const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send(`Belinda is Online!`)
})

app.listen(5000, () => {
 console.log("Belinda is Online!")
})

client.on('ready', () => {
  //client.user.setActivity('Belinda is under maintainence', { type: 'PLAYING' })
  client.user.setActivity(',help | https://dsc.gg/belinda', { type: 'PLAYING' })
})
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

require("./handler")(client);

client.login(process.env.token);
