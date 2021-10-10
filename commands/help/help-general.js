  const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "help-general",
    aliases: ['h'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     run: async (client, message, args) => {
       let embed = new Discord.MessageEmbed()
.setTitle('<a:OG_alert:867965908335865917> General Commands<a:OG_alert:867965908335865917> ')
.addField('userinfo',`<:reply:881114313450983434> sends user's info`)
.addField('perms',`<:reply:881114313450983434> See how many permissions does a user have.`)
.addField('ping',`<:reply:881114313450983434> sends bot ping`)
.addField('support',`<:reply:881114313450983434> sends support server link`)
.addField('avatar<user>','<:reply:881114313450983434> Get the avatar')
//.addField('invites<user>','<:reply:881114313450983434> Get the no of invites of a user')
//.addField('topinvites','<:reply:881114313450983434> Get the top users with top no of invites')
.addField('botinfo','<:reply:881114313450983434>Gives info about bot')
.addField('ascii','<:reply:881114313450983434> Convert a text to ascii')
.addField('country','<:reply:881114313450983434> Get info about a country')
.addField('Hack','<:reply:881114313450983434> Hack Someone ')
.addField('meme','<:reply:881114313450983434> Get some refreshing memes')
//.addField('urban-dictionary','<:reply:881114313450983434> Get some info about a word')
.addField('userinfo<user>','<:reply:881114313450983434>Get users info')
.addField('status<user>','<:reply:881114313450983434>Get users status')
.addField('afk[reason]','<:reply:881114313450983434> Go afk!')
.addField('suggest','<:reply:881114313450983434> sends a suggestion to that server')
.addField('__Admin Features__','**Permission : Administrator**')
.addField('set-suggest','<:reply:881114313450983434> sets a suggestion channel')
.addField('reply[message id of suggestion]','<:reply:881114313450983434>reply to the suggestion')
.addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
.setFooter('Make sure to put , before every command!')
 return message.channel.send({ embeds: [embed] });
     }
}