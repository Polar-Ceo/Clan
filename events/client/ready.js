const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    setInterval(() => bot.user.setActivity(`!help`, { type: "STREAMING", url: "https://www.twitch.tv/Polar_Ceo" }),5000)
};