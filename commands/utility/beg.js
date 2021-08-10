const ms = require('ms');
const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "beg",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
    let currency = "\:moneybag:"
    const Begcheck = await db.get(`begCheck_${message.author.id}`)
    const timeout = 60000;
    if (Begcheck !== null && timeout - (Date.now() - Begcheck) > 0) {
      const timeLeft = ms(timeout - (Date.now() - Begcheck))
      let fail = new Discord.MessageEmbed()
        .setTitle("Timeout")
        .setColor("RED")
        .setDescription(`Slow it Down, Don't be so hasty\nCome back after ${timeLeft} for your future job.`)
        .setTimestamp()
      message.channel.send(fail)
    } else {
      let reward = Math.floor(Math.random() * 5000) + 1
      let currentBalance = await db.get(`wallet_${message.author.id}`)
      let success = new Discord.MessageEmbed()
        .setTitle("Begging Results")
        .setColor("GREEN")
        .setDescription(`You begged on the streets and claimed ${currency} ${reward.toLocaleString()}!`)
        .setTimestamp()
      message.channel.send(success)
      await db.set(`wallet_${message.author.id}`, currentBalance + reward)
      await db.set(`begCheck_${message.author.id}`, Date.now())
 
    }
  }
}