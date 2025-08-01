const fetch = require("node-fetch");
const Discord = require("discord.js");
// Test
module.exports = {
    name: "roast",
    description: "Roast Another User",
    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send({content: "Invalid Format"});

        const mentionedUser = message.mentions.users.first();

        if (!mentionedUser) return message.channel.send({content: "No user Mentioned"});

        fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
            .then((res) => res.json())
            .then((json) => {
                const roastEmbed = new Discord.MessageEmbed()
                    .setTitle(
                        `${message.author.tag}'s roast to ` + mentionedUser.tag
                    )
                    .setDescription(json.insult)
                    .setTimestamp()
                    .setFooter(".");

                message.channel.send({embeds: [roastEmbed]});
            });
    },
};