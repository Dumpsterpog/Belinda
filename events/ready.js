const client = require("../index");
const modmailClient = require("../client/modmail");
client.on("ready", () => {
  modmailClient.ready();
    console.log(`${client.user.tag} is up and ready to go!`)
});
