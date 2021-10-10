  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "owner",
    
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
.setTitle("OWNER")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands")
   .addField(`Atharvat007`,`YUP HE IS MY OWNER!`)
    .setColor("GREEN")
    .setTimestamp()
return message.channel.send({ embeds: [embed] });
     }
}