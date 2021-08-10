const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    config: {
        name: "weekly",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
//here
    run: async (bot, message, args) => {
   
  let user = message.author;
  let timeout = 604800000;
  let amount = 500;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
  let embed1 = new Discord.MessageEmbed() 
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(embed1)
  } else {
  let embed = new Discord.MessageEmbed() 
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You've collected your weekly reward of ${amount} $`);
  message.channel.send(embed)
  db.add(`wallet_${message.author.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


  }
}
}