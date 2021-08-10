const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "give",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {


    let currency = "" //your currency
        let number = message.content.substring(10)
    let amount = parseInt(number.split(" ")[1])
    let EASPORTS = message.mentions.members.first()
    if(!EASPORTS) return message.channel.send(`***${message.author.username}*** Mention someone to give!`)
    let currentWallet = await db.get(`wallet_${message.author.id}`)
    let currentWallet2 = await db.get(`wallet_${EASPORTS.id}`)
        if(currentWallet < amount) return message.channel.send(`**looks like you don't have that much**`) 
        else if(amount <= 0) return message.channel.send(`**Imagine Giving ${amount}${currency} to someone!**`)
        else if(isNaN(args[1])) return message.channel.send('please include a valid number');
        else {
        
      db.set(`wallet_${message.author.id}`, currentWallet - amount)
      db.set(`wallet_${EASPORTS.id}`, currentWallet2 + amount)
      message.channel.send(`**${message.author.username}**, You Gave ${amount} ${currency} To **${EASPORTS.user.username}** *your wallet now is ${currentWallet - amount} ${currency}*`)
            }
                    }

}
