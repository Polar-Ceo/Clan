const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "work",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
  let prefix = "?"

       const check = await db.get(`workCheck_${message.author.id}`)
    const timeout = 1000
    if (check !== null && timeout - (Date.now() - check) > 0) {
      const ms = require("pretty-ms")
      const timeLeft = ms(timeout - (Date.now() - check))
      message.channel.send(`You have already worked come back after ${timeLeft}`)
    } else {
      let currency = '\:OHdear:'
      let money = Math.round(Math.random() * 10000) || Math.round(Math.random() * 0) || Math.round(Math.random() * 1000)
      let worked = [`You cut the grass, and got ${money}, noice!`, `You fell off the ground and got ${money}, hah free money!`, `You typed ${prefix}work and got ${money}, well idk what to say...`, `Here get your ${money}`, `You helped someone and got ${money}`]
      let currentWallet = await db.get(`wallet_${message.author.id}`)
      let currentBank = await db.get(`bank_${message.author.id}`)
      await db.set(`wallet_${message.author.id}`, currentWallet + money)
      await db.set(`workCheck_${message.author.id}`, Date.now())
       let embed = new Discord.MessageEmbed()
        .setTitle("You worked!")
        .setDescription(worked[Math.floor(Math.random() * worked.length)])
        .setColor("GREEN")
        .setDescription(`cut some grass and found ${money}`)
      message.channel.send(embed);
    
    }
    }
}
