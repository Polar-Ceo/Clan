 const db = require('quick.db')
const Discord = require("discord.js");

module.exports = {
    config: {
        name: "invites",
        aliases: ["work"],
        category: "work for money",
        description: "Give you money for working",
        accessableby: "everyone"
    },
    run: async (client, message) => {
              if(message.author.id === client.user.id) return;
        var user = message.author;
        message.guild.fetchInvites()
        .then
        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                     message.reply(`**You have ${userInviteCount} invites.**`);
            }
        )
}
}