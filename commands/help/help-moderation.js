  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "test-moderation",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
.setTitle('<a:OG_alert:867965908335865917> Moderation Commands<a:OG_alert:867965908335865917> ')
.addField('ADMINISTRATOR','`,ban[user][reason]`★`,clear[messages]`★`,kick[user][reason]`★`,slowmode[time/off][s/m/h]`')
.addField('Mute System','`,mute[user][reason]`★`,unmute[user][reason]`')
.setThumbnail(client.user.displayAvatarURL())
 return message.channel.send({ embeds: [embed] });
     }
}