  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "partners",
    //aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
 let embed = new Discord.MessageEmbed()
 .setTitle('<a:og_Emergency:864449264603758592>Our Partners<a:og_Emergency:864449264603758592> ')
 .addField('Minecraft Server',`<:reply:881114313450983434> [Join Now](https://discord.gg/BaMFkhF8tR)`)
 .addField('P Jain Community','<:reply:881114313450983434> [Join Now](https://discord.gg/Yk3Shg7DRJ)')
 .addField('Seb Development','<:reply:881114313450983434> [Join Now](https://discord.gg/w6CMYBfEvy)')
 .addField('ICE`s server','<:reply:881114313450983434> [Join Now](https://discord.gg/PkHq2xqu3y)')
 .addField('Venom God Server','<:reply:881114313450983434> [Join Now](https://discord.gg/qv2znxmd3X)')
 .addField('Akshat`s Kingdom','<:reply:881114313450983434> [Join Now](https://discord.gg/akshat)')
 .addField('The Cluster','<:reply:881114313450983434> [Join Now](https://discord.gg/rFC7j4n)')
 .addField('Team </>','<:reply:881114313450983434> [Join Now](https://discord.gg/bpt6WzeBEM)')
 .addField('Continental','<:reply:881114313450983434> [Join Now](https://discord.gg/TX7XgMGKxu)')
  .addField('KRAZY DEV','<:reply:881114313450983434> [Join Now](https://discord.gg/XYnMTQNTFh)')
 .setFooter('Make sure to check them out , they offer alot!')
 return message.channel.send({ embeds: [embed] });
     }
}