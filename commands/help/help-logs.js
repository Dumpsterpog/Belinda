  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "help-logs",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
      .setTitle('<a:OG_alert:867965908335865917>Set Server Logs<a:OG_alert:867965908335865917> ')
      .addField('set-msglog[channel]','<:reply:881114313450983434>If someone deletes or edits message it will be logged in a channel')
      .addField(',set-welcome[#channel]','<:reply:881114313450983434> If someone joins a server bot will send a message!')
     .addField(',set-leavelog[#channel]','<:reply:881114313450983434> Bot replies with an embed when someone leaves a server!')
      .addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
      .setFooter('Make sure to put , before every command!')
      return message.channel.send({ embeds: [embed] });
     }
}