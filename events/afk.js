const db = require('../models/afkschema');
const moment = require('moment');
const { MessageEmbed } = require('discord.js');
const client = require("../index");
client.on('messageCreate', async(message) => {
  if(message.author.bot) return;
  db.findOne({ Guild: message.guild.id, Member: message.author.id }, async(err, data) => {
    if(err) throw err;
    if(data) {
      data.delete()
      const afk = new MessageEmbed()
      .setTitle('WELCOME BACK')
      .setDescription(`${message.author.tag} afk has been removed`)
      .addField('You went afk',` ${moment(parseInt(data.TimeAgo)).fromNow()}`)
       .setColor('GREEN')
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      
      message.channel.send({ embeds: [afk]})
    } else return;
  })
  
  if(message.mentions.members.first()) {
    db.findOne({ Guild: message.guild.id, Member: message.mentions.members.first().id }, async(err, data) => {
      if(err) throw err;
      if(data) {
        const member = message.guild.members.cache.get(data.Member);
        const afk = new MessageEmbed()
        .setTitle(`${member.user.tag} Is Currently Afk`)
        .setDescription(`For **${data.Content}**\n User is in  afk mode since** ${moment(parseInt(data.TimeAgo)).fromNow()}**`)
        .setColor('GREEN')
        .setTimestamp()
        
        message.channel.send({ embeds: [afk]})
      } else return;
    })
  }
})
