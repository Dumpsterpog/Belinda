  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "help-search",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
       .setTitle('<a:OG_alert:867965908335865917>Search Internet<a:OG_alert:867965908335865917> ')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=261989723639&scope=bot%20applications.commands')
       .addField('docs<query>','<:reply:881114313450983434>Search docs')
       .addField('github[user]','<:reply:881114313450983434>Get a users github info')
       .addField('reddit[name]','<:reply:881114313450983434>Reddit!')
       .addField('wiki[query]','<:reply:881114313450983434>Search wiki')
       .addField('google[query]','<:reply:881114313450983434>Search google')
       .addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
       .setFooter('Make sure to put , before every command!')
       return message.channel.send({ embeds: [embed] });
     }
}