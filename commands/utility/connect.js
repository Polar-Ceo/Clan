const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "connect",
        aliases: ["join", "j"],
        description: "Bans the user",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
    },

run: async (client, message) => {

  const e1 =  new MessageEmbed()
       .setDescription(`**You must Join a voice channel before using this command!**`)
       .setColor("#12abff")

       const e2 =  new MessageEmbed()
       .setDescription(`**I don't have permission to join the voice channel**`)
       .setColor("#12abff")

       const e3 =  new MessageEmbed()
       .setDescription(`**I don't have permission to speak in the voice channel**`)
       .setColor("#12abff")


  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(e1)
    

  if (!channel.permissionsFor(message.client.user).has("CONNECT"))
    return error(e2)

  if (!channel.permissionsFor(message.client.user).has("SPEAK"))
    return error(e3)

  await channel.join();

  return message.channel.send(
    new MessageEmbed()
      .setDescription("**Joined the voice channel :white_check_mark: **")
      .setColor("BLUE")
  );
}
}