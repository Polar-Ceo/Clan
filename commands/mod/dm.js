 const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "dm",
        aliases: ["dm"],
        category: "MOD",
        description: "Dms a user",
        accessableby: "everyone"
    },
    run: async (client, message) => {
        if(!message.member || !message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send(
"<:733987631628550175:870949748604039189> you dont have permssion <:733987631628550175:870949748604039189>"
);
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('<a:802803657820864522:875243426944270376> Mention a member you will like to dm')
if(!whattosend[1]) return message.channel.send('<a:729477543119552592:875237546370662460> What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}
}