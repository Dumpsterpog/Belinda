const client = require("../index");
const {MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
client.on("interactionCreate", async (interaction) => {
 let general = new Discord.MessageEmbed()
.setTitle('<a:OG_alert:867965908335865917> General Commands<a:OG_alert:867965908335865917> ')
.addField('userinfo',`<:reply:881114313450983434> sends user's info`)
.addField('perms',`<:reply:881114313450983434> See how many permissions does a user have.`)
.addField('ping',`<:reply:881114313450983434> sends bot ping`)
.addField('support',`<:reply:881114313450983434> sends support server link`)
.addField('avatar<user>','<:reply:881114313450983434> Get the avatar')
//.addField('invites<user>','<:reply:881114313450983434> Get the no of invites of a user')
//.addField('topinvites','<:reply:881114313450983434> Get the top users with top no of invites')
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
   let image = new Discord.MessageEmbed()
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
let logs = new Discord.MessageEmbed()
      .setTitle('<a:OG_alert:867965908335865917>Set Server Logs<a:OG_alert:867965908335865917> ')
      .addField('set-msglog[channel]','<:reply:881114313450983434>If someone deletes or edits message it will be logged in a channel')
      .addField(',set-welcome[#channel]','<:reply:881114313450983434> If someone joins a server bot will send a message!')
     .addField(',set-leavelog[#channel]','<:reply:881114313450983434> Bot replies with an embed when someone leaves a server!')
      .addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
      .setFooter('Make sure to put , before every command!')
       let search = new Discord.MessageEmbed()
       .setTitle('<a:OG_alert:867965908335865917>Search Internet<a:OG_alert:867965908335865917> ')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=261989723639&scope=bot%20applications.commands')
       .addField('docs<query>','<:reply:881114313450983434>Search docs')
       .addField('github[user]','<:reply:881114313450983434>Get a users github info')
       .addField('reddit[name]','<:reply:881114313450983434>Reddit!')
       .addField('wiki[query]','<:reply:881114313450983434>Search wiki')
       .addField('google[query]','<:reply:881114313450983434>Search google')
       .addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
       .setFooter('Make sure to put , before every command!')
        let chatbot = new Discord.MessageEmbed()
.setTitle('<a:OG_alert:867965908335865917> Chat-Bot <a:OG_alert:867965908335865917> ')
.addField('`,set-chat[channel]`','Sets the chat-bot channel',true)
.addField('`,remove-chat`','Removes the chat-bot channel')
.addField('LINKS',`[INVITE ME](https://discord.com/api/oauth2/authorize?client_id=881446504752103445&permissions=141196922871&scope=bot%20applications.commands) ★ [Support Server](https://discord.gg/3x8wYx6dA5)`)
.setFooter('Make sure to put , before every command!')
.setThumbnail(client.user.displayAvatarURL())
    // Slash Command Handling
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];
  if (interaction.channel?.type === 'DM') return interaction.followUp({content: `SLASH COMMANDS CANT BE EXECUTED IN DM's`})
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
if(!interaction.member.permissions.has(cmd.userPermissions ||[] )) return interaction.followUp({content: 'You dont have enough perms'});
        cmd.run(client, interaction, args);
   } else {
const customCommand = await customCommandModel.findOne({
  commandName: interaction.commandName,
});
if(!customCommand)
return interaction.followUp({content: "An error occured"});

return interaction.followUp({content: customCommand.response})
   }
    }

   // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: true });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }

   /* if(interaction.isButton()) {
      console.log(interaction);

      interaction.reply({content: `${interaction.user.tag} clicked me`})
      //console.clear();
    }*/
    if(interaction.isButton()) {
  if(interaction.customId === `random`){
    interaction.reply({ embeds: [general] , ephemeral: true});
    } else if(interaction.customId === `random2`){
    interaction.reply({ embeds: [image] , ephemeral: true});   
     } else if(interaction.customId === `random3`){
    interaction.reply({ embeds: [search] , ephemeral: true});
    } else if(interaction.customId === `random4`){
    interaction.reply({ embeds: [logs] , ephemeral: true});
 } else if(interaction.customId === `random5`){
    interaction.reply({ embeds: [chatbot] , ephemeral: true});



 
    }  
  

  
}
 
});
