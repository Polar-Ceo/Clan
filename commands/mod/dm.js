 const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "dm",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (client, message) => {
        if(!message.member || !message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send(
"You need have the administrator permssion to use this command!"
);
 const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Mention a member you will like to dm')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}
}