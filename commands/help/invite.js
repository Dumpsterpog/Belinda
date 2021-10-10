  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "invite",
    
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
.setTitle("INVITE LINK")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands")
    .setDescription(`My Default Prefix is **,**\nTo join Support Server: [Click Here](https://discord.gg/3x8wYx6dA5)\nFor help type** ,help**`)
    .addField('Invite','[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands)')
    .setColor("GREEN")
    .setTimestamp()
return message.channel.send({ embeds: [embed] });
     }
}