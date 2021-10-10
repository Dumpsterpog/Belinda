const { Client, ContextMenuInteraction } = require("discord.js");

module.exports = {
    name: "getavatar",
type: 'USER',
    /**
     *
     * @param {Client} client
     * @param {ContextMenuInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
   const user = await client.users.fetch(interaction.targetId);

   const embed = new MessageEmbed()
   .setAuthor(user.tag)
   .setImage(user.displayAvatarURL({dynamic: true }));

   interaction.followUp({content: `Users Avatar`, embeds: [embed]});
    },
};
