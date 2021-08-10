 const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "lockdown",
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
.setColor("")
message.channel.send(embed);
} else {
message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
SEND_MESSAGES: false
});
message.channel.send 
let embed = new Discord.MessageEmbed()
.setTitle("<:733988422405980211:868915509939273799> CHANNEL LOCKED DOWN <:733988422405980211:868915509939273799>")
.setDescription("**The channel has been locked down**")
message.channel.send(embed);
}
}
}