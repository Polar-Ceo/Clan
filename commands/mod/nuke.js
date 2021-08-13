 const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "nuke",
        aliases: ["nuke"],
        category: "MOD",
        description: "Nukes the channel",
    },
    run: async (client, message) => {
if (message.content.startsWith('!nuke')) {
if(!message.member || !message.member.hasPermission("ADMINISTRATOR")){
 let embed = new Discord.MessageEmbed()
.setTitle("<:853588019923124224:864764645821775873> **ERROR**<:853588019923124224:864764645821775873> ")

.setDescription("You don't have the **permission** to use this command")
.setColor("")
message.channel.send(embed);
} else {
  let embed = new Discord.MessageEmbed()
.setTitle("<:853588019923124224:864764645821775873> Channel Nuked <:853588019923124224:864764645821775873> ")
.setDescription("**The channel has been nuked**");

      message.channel.clone({position: message.channel.rawPosition }).then(ch => { ch.send(embed)
  message.channel.delete();
})
}
}
    }
}