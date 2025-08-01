 const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const ms = require('ms')
const db = require('quick.db');
module.exports = {
    name: "reminder",
    category: "utility",
    description:{
        usage: "remind <time> <reminder>",
        content:  "Helps remind you something",
    },
     run: async (client, message, args ) => {
    
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new Discord.MessageEmbed()
            .setColor('#F30B04')
            .setDescription('Please specify the time in `s/m/h/d`!')

        const wrongtime = new Discord.MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`Sorry I can only set the reminder in d, m, h, or s.`)

        const reminderembed = new Discord.MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`Please tell me what you want to be reminded off`)

        if (!args[0]) return  message.channel.send({ embeds: [notime] });
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.channel.send({ embeds: [wrongtime] });
        if (!reminder) return message.channel.send({ embeds: [reminderembed] });

        const remindertime = new Discord.MessageEmbed()
        .setColor('#33F304')
        .setDescription(`\**Your reminder will go off in ${time} i will dm you  when the time ends**`)

        message.channel.send({ embeds: [remindertime] });

        const reminderdm = new Discord.MessageEmbed()
        .setColor('#7289DA')
        .setTitle('**REMINDER**')
        .setDescription(`**It has been ${time} here is your reminder:** ${reminder}`)  

        setTimeout(async function () {
           try{

            await message.author.send({ embeds: [reminderdm] });
           }catch(err){

           } 
           
        }, ms(time));
    }
}