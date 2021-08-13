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
.setTitle("<a:729477543119552592:875237546370662460> **ERROR** <a:729477543119552592:875237546370662460> ")
.setDescription("You don't have the **permission** to use this command")

message.channel.send(embed);
} else {
message.channel.updateOverwrite
  (message.channel.guild.roles.everyone, {
SEND_MESSAGES: true
});
let embed = new Discord.MessageEmbed()
.setTitle("<a:802803657820864522:875243426944270376> CHANNEL UNLOCKED <a:802803657820864522:875243426944270376>")
.setDescription("**Channel has been unlocked**.");
message.channel.send(embed);
}
    }
}
