const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    config: {
        name: "leader",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
run: async (client, message, args) => {

        let wallet = db.all().filter(data => data.ID.startsWith(`wallet_`)).sort((a, b) => b.data - a.data);
        if (!wallet.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("BLUE")
                .setFooter("No leaderboard")
            return message.channel.send(noEmbed)
        };

        wallet.length = 10;
var finalLb = "";
for (var i in wallet) {
  finalLb += `**${wallet.indexOf(wallet[i])+1}. ${client.users.cache.get(wallet[i].ID.split('_')[1]) ? client.users.cache.get(wallet[i].ID.split('_')[1]).tag : "Unknown User#0000:money_with_wings:"}** - ${wallet[i].data}\n`;
}
        const embed = new MessageEmbed()
            .setTitle(`Leaderboard of ${message.guild.name}!`, message.guild.iconURL)
            .setColor("BLUE")
            .setDescription(finalLb)
        message.channel.send(embed);
    }
}