const { MessageEmbed } = require('discord.js');
const { ownerID } = require('../../owner.json') 

module.exports = {
    config: {
        name: "purge",
        aliases: [],
        category: "moderation",
        description: "Deletes messages from a channel",
        usage: "m/purge [amount of messages]"
    },
    run: async (bot, message, args) => {

const e1 =  new MessageEmbed()

       .setDescription(`**Enter a vaild number to delete messages**`)
      
       .setColor("#12abff")

       const e2 =  new MessageEmbed()

       .setDescription(`**Please Supply A Number Less Than 100!**`)
      
       .setColor("#12abff")

      const e3 =  new MessageEmbed()

       .setDescription(`**Please Supply A Number More Than 1!**`)
      
       .setColor("#12abff")

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Sufficient Permissions!- [MANAGE_MESSAGES]")
        if (isNaN(args[0]))
            return message.channel.send(e1)

        if (args[0] > 100)
            return message.channel.send(e2)

        if (args[0] < 1)
            return message.channel.send(e3)

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 5000 }))).catch(() => null)
    }
}