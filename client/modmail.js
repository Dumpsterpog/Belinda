const {ModMailClient} = require('reconlx');
const client = require('../index');

const modmailClient = new ModMailClient({
  client,
  guildId: '842345709592117258',
  category: '881786568807952465',
  modmailRole: '881787155003883551',
  mongooseConnectionString: 'mongodb+srv://OGbot:ogdiscordbot1970@discord-bot.cxhw2.mongodb.net/mail',
  transcriptChannel: "881786803949010975",

});

module.exports = modmailClient;
