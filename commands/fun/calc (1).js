const Discord = require('discord.js');
const math = require('mathjs');
const db = require('quick.db');

module.exports = {
  name: 'calc',
  cooldown: 10,
  category: 'ultility',
  
  
 run: async (client, message, args ) => {
      let blacklist = await db.fetch(`blacklist_${message.author.id}`);
  if (blacklist === "Blacklisted")return message.reply(`You are blacklisted from using the bot!`)
   const simplydjs = require('simply-djs')

simplydjs.calculator(message, {
    embedColor: '#075FFF', 
    credit: false
})
    }
}
