const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const { mongooseConnectionString } = require("../config.json");
const mongoose = require("mongoose");
const anime = require('anime-actions');
const globPromise = promisify(glob);
const infinite = require("infinitycord");
/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
    client.on("ready", async () => {
   
        // Register for a single guild
       // await client.guilds.cache
         //   .get("842345709592117258")
         //   .commands.set(arrayOfSlashCommands);

        // Register for all the guilds the bot is in

        
        await client.application.commands.set(arrayOfSlashCommands);
          customCommandModel.find().then((data) => {
            data.forEach((cmd) => {
                const guild = client.guilds.cache.get(cmd.guildId);
                guild?.commands.create({
                    name: cmd.commandName,
                    description: 'A custom command'
                })
            })
        })
    });
  
       client.on("ready", async () => {
        
/*infinite.autoMeme(client, {
  chid: "886223472093704242",
  interval: 150000,
})*/
    });
   // mongoose
 const { mongooseConnectionString } = require('../config.json')
    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString, {
      //   useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }) //=> console.log('Connected to mongodb'));

};
