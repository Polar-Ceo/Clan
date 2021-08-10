const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "bal",
        aliases: ["bal"],
        category: "PEE",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {

    let balance = await db.get(`wallet_${message.author.id}`);

    let bank = await db.get(`bank_${message.author.id}`);

    if (balance === null) balance = 0;
    if (bank === null) bank = 0;

    let currency = ':heavy_dollar_sign:';

    let moneyEmbed = new Discord.MessageEmbed()

      .setTitle(`${message.author.username}'s Balance`)
      .setDescription(
        `Wallet: ${balance}${currency} \nBank: ${bank}${currency}`
      )
      .setColor('RANDOM')
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
    message.channel.send(moneyEmbed);
    }
}