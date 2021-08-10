const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");

module.exports = {
  config : {
    name: "unbanall",
  
  aliases: ['uball'],
  description: 'Can unbanll all the users',
   category: "Moderation",
  example: `c!unbanall`},


    run: async(client, message, args) => {
        const noadmin = new Discord.MessageEmbed()
            .setDescription(`*You are missing \`ADMINISTRATOR\` permissions to perform this execution.*`);

                if (message.member.hasPermission("ADMINISTRATOR")) {
                    message.guild.fetchBans().then(bans => {
                        if (bans.size == 0) {{
              const embed = new MessageEmbed()
               .setDescription(`There are no banned users.`)
               .setColor('#12abff')
                 message.reply(embed)
            }   
                            
                        } else {
                            bans.forEach(ban => {
                                message.guild.members.unban(ban.user.id);
                            })
                            const emb = new Discord.MessageEmbed()
	.setTitle('UNBANNED ALL')
	.setDescription(` **All banned users  has been unbanned** \n\n Moderator:<@${message.author.id}>\n\nUnbanned all members.`)

	.setColor("#12abff")
        message.channel.send(emb);
                            
                        }
                    }
                    )
                } else {
                    return await message.channel.send(noadmin);
      }
  },
  aliases: ['ul'],
  description: 'Unban all member',
  usage:"unbanall",
};