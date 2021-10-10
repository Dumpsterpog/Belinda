const { Client, Message, MessageEmbed } = require("discord.js");
const modmailClient = require("../../client/modmail");
module.exports = {
  name: "close",
  description: "closes mail",

  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args) => {
    const reason = args.join("") ||"no reason";
    modmailClient.deleteMail({channel : message.channel.id, reason});
  },
}
