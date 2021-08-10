  const db = require('quick.db')
  const ms = require("parse-ms");
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "deposit",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

  let user = message.author;

  let member = db.fetch(`wallet_${message.author.id}`)
  let member2 = db.fetch(`bank_${message.author.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`wallet_${message.author.id}`)
    let bank = await db.fetch(`bank_${message.author.id}`)

    let embedbank = new Discord.RichEmbed()
    .setColor('#FFFFFF')
    .setDescription("<:Cross:618736602901905418> You don't have any money to deposit")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.author.id}`, money)
    db.subtract(`wallet_${message.author.id}`, money)
    let embed5 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have deposited all your coins into your bank`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed() 
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed() 
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> You can't deposit negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed() 
  .setColor("#FFFFFF")
  .setDescription(`<:Cross:618736602901905418> You don't have that much money`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed() 
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have deposited ${args[0]} coins into your bank`);

  message.channel.send(embed5)
  db.add(`bank_${message.author.id}`, args[0])
  db.subtract(`wallet_${message.author.id}`, args[0])
  }
}
}