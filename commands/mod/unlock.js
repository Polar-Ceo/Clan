 const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "unlock",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (client, message) => {

if(!message.member || !message.member.hasPermission("KICK_MEMBERS")){
 let embed = new Discord.MessageEmbed()
.setTitle("<:853588019923124224:864764645821775873> **ERROR**<:853588019923124224:864764645821775873> ")
.setDescription("You don't have the **permission** to use this command")

message.channel.send(embed);
} else {
message.channel.updateOverwrite
  (message.channel.guild.roles.everyone, {
SEND_MESSAGES: true
});
let embed = new Discord.MessageEmbed()
.setTitle("<:download106:868990692884643860> CHANNEL UNLOCKED <:download106:868990692884643860> ")
.setDescription("**Channel has been unlocked**.");
message.channel.send(embed);
}
    }
}
