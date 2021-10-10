  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "help-img",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
      // <:reply:881114313450983434>
              let embed = new Discord.MessageEmbed()
.setTitle('<a:OG_alert:867965908335865917> General Commands<a:OG_alert:867965908335865917> ')
.addField('achievement','<:reply:881114313450983434>Get Your Own Minecraft Achievement  ')
.addField('avatarfusion[user1][user2]',' <:reply:881114313450983434>AvatarFusion')
.addField('changemymind[text]','<:reply:881114313450983434>Change your mind')
.addField('comment[text]','<:reply:881114313450983434>Comment something on youtube')
.addField('jail<user>','<:reply:881114313450983434>Put someone behind the bars')
.addField('meeting[text]','<:reply:881114313450983434>Call an emergency meeting')
.addField('pat[user]','<:reply:881114313450983434>Pat a user')
.addField('shame<user>','<:reply:881114313450983434>Returns a shame image')
.addField('slap[user]','<:reply:881114313450983434> Slap Someone')
.addField('smartcat[user]','<:reply:881114313450983434> Returns a smartcat image')
.addField('speed<user>',' <:reply:881114313450983434>Returns a speed image')
.addField('tg<user>','<:reply:881114313450983434>Gets you a triggered gif with your avatar')
.addField('wasted<user>','<:reply:881114313450983434>Wasted!')
.addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
.setFooter('Make sure to put `,` before every command!')
return message.channel.send({ embeds: [embed] });
     }
}