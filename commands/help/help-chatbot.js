  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "help-chatbot",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
.setTitle('<a:OG_alert:867965908335865917> Chat-Bot <a:OG_alert:867965908335865917> ')
.addField('`,set-chat[channel]`','Sets the chat-bot channel',true)
.addField('`,remove-chat`','Removes the chat-bot channel')
.addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
.setFooter('Make sure to put , before every command!')
.setThumbnail(client.user.displayAvatarURL())
 return message.channel.send({ embeds: [embed] });
     }
}