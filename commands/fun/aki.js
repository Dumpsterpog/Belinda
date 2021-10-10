const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const akinator = require("discord.js-akinator");
module.exports = {
  name: 'akinator',
  aliases: [ 'aki'],
  group: 'fun',
  description: 'Akinator Game',
  clientPermissions: [ 'EMBED_LINKS' ],
  
  run: async (client, message, args) => {
   // return message.channel.send({content: `Command is under temporary outage!`});
    const language = "en"; //The Language of the Game
const childMode = true; //Whether to use Akinator's Child Mode
const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
const useButtons = true; //Whether to use Discord's Buttons

    akinator(message, {
            language: language, //Defaults to "en"
            childMode: childMode, //Defaults to "false"
            gameType: gameType, //Defaults to "character"
            useButtons: useButtons //Defaults to "false"
        });
    }
}
