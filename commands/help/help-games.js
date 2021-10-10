  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "help-games",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
.setTitle('Games')
.addField('8ball','<:reply:881114313450983434> ask some questions :D')
.addField('chaoswords','<:reply:881114313450983434> find words in a sentence')
.addField('coinflip','<:reply:881114313450983434> flip a coin')
.addField('fasttype','<:reply:881114313450983434> see how fast can you type')
.addField('fight[user]','<:reply:881114313450983434>Fight with someone!')
.addField('gtn','<:reply:881114313450983434>guess the number')
.addField('translate','<:reply:881114313450983434>Translate something :D')
.addField('rps[user]','<:reply:881114313450983434>Play some Rock-Paper-Scissors')
.addField('jumble','<:reply:881114313450983434>Solve a jumbled word')
.addField('trivia','<:reply:881114313450983434>Answers some questions')
.addField('meme','<:reply:881114313450983434>Get some refreshing memes')
.addField('aki','<:reply:881114313450983434>Make akinator guess your character!')
.addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
.setFooter('Make sure to put , before every command!')
 return message.channel.send({ embeds: [embed] });
     }
}
