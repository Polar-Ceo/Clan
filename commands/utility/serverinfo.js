const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  config : {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo"
  },
  run: async (client, message, args) => {
    //Start
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

     const embed = new MessageEmbed()
      .setTitle("Info of " + guild.name)
      .setColor("#12abff")
      .setThumbnail(guild.iconURL())
      .addField("OWNER", message.guild.owner, true)
      .addField(`NAME`, guild.name, true)
      .addField(`PREFIX`, `!`, true)
      .addField(`ROLE COUNT`, Roles, true)
      .addField(`EMOJI COUNT`, Emojis, true)
      .addField(`MEMBER COUNT`, Members, true)
      .addField(`HUMANS COUNT`, Humans, true)
      .addField(`BOT COUNT`, Bots, true)
      .addField("VERIFICATION LEVEL", message.guild.verificationLevel, true)
      .addField(`SERVER CREATED AT`, guild.createdAt.toDateString(), true)
      .setFooter(`ID: ${message.guild.id} - Created • ${message.guild.createdAt.toDateString()}`)

    message.channel.send(embed);
  }
};