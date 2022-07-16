const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  
  let victim = message.author.id;
    if(config.owner.includes(victim)) {

      message.channel.send("çalüşürüm abiii")
}  
  };

module.exports.configuration = {
    name: "panel",
    aliases: ["saldıramkçocu"],
    info: "RICHARD PANEL LA QWE",
    usage: "Taslak",
    description: "Taslak Komutu."
};