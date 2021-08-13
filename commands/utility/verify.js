 const db = require('quick.db')
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
    config: {
        name: "verify",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (client, message) => {
 if(message.member) {
let role = message.guild.roles.cache.find(role => role.name === "MODERATOR");
message.member.roles.add(role);
let embed = new Discord.MessageEmbed()
.setTitle("Verified")
.setDescription("Now U Can See All Visible Channel")
.setColor("BLUE")
.setFooter("Verified");
message.channel.send(embed).then(msg => {
setTimeout(() => msg.delete(), 5000);
});
} else {
 let embed = new Discord.MessageEmbed()
.setTitle("<:853588019923124224:864764645821775873> **ERROR**<:853588019923124224:864764645821775873> ")
.setDescription("You don't have the **permission** to use this command")
.setColor("BLUE")
message.channel.send(embed);
}
}
}