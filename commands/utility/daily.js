 const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "daily",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (client, message) => {

    let currency = ":moneybag:"
    const check = await db.get(`dailyCheck_${message.author.id}`)
    const timeout = 86400000;
    if (check !== null && timeout - (Date.now() - check) > 0) {
      const ms = require("pretty-ms")
      const timeLeft = ms(timeout - (Date.now() - check))
      let fail = new Discord.MessageEmbed()
        .setTitle("You've already had your daily!")
        .setColor("RED")
        .setDescription(`Nice try, but you've already claimed your daily for today!\nCome back after ${timeLeft} for your next daily.`)
        .setTimestamp()
      message.channel.send(fail)
    } else {
      let reward = 10000
      let currentBalance = await db.get(`wallet_${message.author.id}`)
      let success = new Discord.MessageEmbed()
        .setTitle("You claimed your daily!")
        .setColor("GREEN")
        .setDescription(`Nice job, you just claimed ${currency} ${reward.toLocaleString()}!\nCome back tomorrow for another ${currency} ${reward.toLocaleString()}!`)
        .setTimestamp()
      message.channel.send(success)
      await db.set(`wallet_${message.author.id}`, currentBalance + reward)
      await db.set(`dailyCheck_${message.author.id}`, Date.now())
    }
  }
}