  const { Client, CommandInteraction, MessageEmbed, Message, MessageActionRow, MessageButton } = require("discord.js");
const db = require("quick.db")
module.exports = {
    name: 'help',
    category: 'fun',
     
    
 run: async (client, message, args ) => {

if(!message.guild.me.permissions.has("SEND_MESSAGES")) return;

  
    

 const row = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId("random")
    .setLabel("GENERAL")
    .setStyle("SUCCESS"),
    new MessageButton()
    .setCustomId("random2")
    .setLabel("IMAGE")
    .setStyle("SUCCESS"),
        new MessageButton()
    .setCustomId("random3")
    .setLabel("SEARCH")
    .setStyle("SUCCESS"),
      new MessageButton()
    .setCustomId("random4")
    .setLabel("LOGS")
    .setStyle("SUCCESS"),
      new MessageButton()
    .setCustomId("random5")
    .setLabel("CHATBOT")
    .setStyle("SUCCESS"),
     )
        const embed = new MessageEmbed()
      .setTitle('Help Menu')
.setDescription('★**Prefix for this server: `,`**\n★**For slash commands type `/help` for full list of slash commands**')
.addField('Parameters','\`\`\`[]->mention\n<>->optional\n{}->ID or Mentionable\`\`\`')
.addField('<:BELINDA_ONLINE:869876135335456778> General Commands','`,help-general`',true)
.addField('🎮 Game Commands','`,help-games`',true)
.addField('😆 Image Generation','`,help-img`',true)
.addField('🔎 Search Internet','`,help-search`',true)
.addField('<:stafflogo:883713147490430976> Logging','`,help-logs`',true)
.addField('<:3605_alivechat:885486428463726602> Chat-Bot','`,help-chatbot`',true)
.addField('NEWS:',"1) We just launched our own 24/7 Stage channel\n[24/7 Stage](https://discord.gg/SrZNGQ7DyH)")
.addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
.setThumbnail(client.user.displayAvatarURL())

        .setTimestamp()
        .setColor('RANDOM');

        message.channel.send({embeds: [embed], components: [row]})
        


    /*  .then((msg) => {
            setTimeout(function() {
              const row = new MessageActionRow().addComponents(
    new MessageButton()
    .setCustomId("random")
    .setLabel("GENERAL")
    .setStyle("DANGER")
    .setDisabled(true),
    new MessageButton()
    .setCustomId("random2")
    .setLabel("IMAGE")
    .setStyle("DANGER")
       .setDisabled(true),
        new MessageButton()
    .setCustomId("random3")
    .setLabel("SEARCH")
    .setStyle("DANGER")
       .setDisabled(true),
      new MessageButton()
    .setCustomId("random4")
    .setLabel("LOGS")
    .setStyle("DANGER")
       .setDisabled(true),
      new MessageButton()
    .setCustomId("random5")
    .setLabel("CHATBOT")
    .setStyle("DANGER")
       .setDisabled(true),
     )

        const embed = new MessageEmbed()
.setTitle('HELP MENU EXPIRED!')
.addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
.setFooter('Make sure to put , before every command!')
.setThumbnail(client.user.displayAvatarURL())

        .setTimestamp()
        .setColor('RANDOM');
        
          msg.edit({embeds: [embed], components: [row]});
       }, 120000)
             
      });*/
 }
}
