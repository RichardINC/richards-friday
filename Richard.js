const {Discord, Client, MessageEmbed} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const config = global.config = require("./SRC/Settings/config.json");
const Veritabani = require("richard.db");
require('discord-buttons')(client);
const ms = global.ms = require("ms")
const fs = require("fs");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
global.aliases = aliases;
global.client = client;

client.login(config.token);

/////////////// ACILIS
  client.on("ready", async () => {
    client.user.setPresence({ activity: { name: config.activity }, status: "dnd" });
  });
  /////////////// ACILIS

  fs.readdir("./SRC/Command", (err, files) => {

    if(err) return console.error(err);

    files = files.filter(file => file.endsWith(".js"));

    files.forEach(file => {

        let prop = require(`./SRC/Command/${file}`);

        if(!prop.configuration) return;

        console.log(`[ COMMAND ] ${prop.configuration.info} komutu yüklendi! `);

        if(typeof prop.onLoad === "function") prop.onLoad(client);

        commands.set(prop.configuration.name, prop);

        if(prop.configuration.aliases) prop.configuration.aliases.forEach(aliase => aliases.set(aliase, prop));

    });

});

  client.on("message", (message) => {

        if (message.author.bot ||!message.content.startsWith(config.prefix) || !message.channel || message.channel.type == "dm") return;

        let args = message.content

          .substring(config.prefix.length)

          .split(" ");
          let embed = new MessageEmbed()
          .setColor("RANDOM")
          .setFooter(config.footer)
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
          
    let command = args[0];

        let bot = message.client;

        args = args.splice(1);

        let calistirici;

        if (commands.has(command)) {

          calistirici = commands.get(command);

          calistirici.execute(bot, message, args);

        } else if (aliases.has(command)) {

          calistirici = aliases.get(command);

          calistirici.execute(bot, message, args);

      }  })
