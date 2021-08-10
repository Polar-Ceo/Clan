const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const Discord = require("discord.js");
  const client = new Discord.Client();
   const Database = require("@replit/database");


module.exports = {
    config: {
        name: "buy",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
   
run : async(client, message, args) => {

      const e1 =  new MessageEmbed()

    .setColor(`#dbbbff`)
 .setTitle("<a:864764654361247784:874040751946878986> **STORE** <a:864764654361247784:874040751946878986>")

.setDescription("**Welcome to the store**")

    .addField(`**<a:785628232372191274:864764660162232360> ❯ ITEMS **`,"`polar chain`,`chicken`,`knife`,`laser`,`dog`,`house`,`cat`,`phone`,`sword` `teddy`,`dope doggy`,`diamond chain`,`diamond teddy`,`gold sword` \n `diamond polar`")

        let author = db.fetch(`wallet_${message.author.id}`)

        if (!args[0]) {
            message.channel.send(e1)
        } //15

         if (args[0] === "polar-chain") {
            if (author < 200) {
                message.reply(" You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send(`${message.author} You have bought 1x Sword!`)
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chickenx") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chickenx") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }

                        if (args[0] === "chicken") {
            if (author < 200) {
                message.reply("You don't have enough ihscoins to buy this item!")
            } else {
                let items = db.fetch(message.author.id, { items: [] })
                db.push(message.author.id, "Sword")
                message.channel.send("You have bought 1x Sword!")
                db.subtract(`money_${message.author.id}`, 200)
            }
        }
    }
}