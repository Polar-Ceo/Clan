const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    config: {
        name: "disablemuterole",
        aliases: ['clearmuterole', 'dmr', 'disablemr', 'dmrole'],
        description: 'Disables Server Mute Role',
        usage: '[role name | role mention | role ID]',
    },
     run: async (bot, message, args) => {

       const e2 =  new MessageEmbed()

       .setDescription(`**You Do Not Have The Required Permissions!**`)
      
       .setColor("#12abff")

              const e1 =  new MessageEmbed()

       .setDescription(`**There is no mute role to disable**`)
      
       .setColor("#12abff")

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(e2)

        try {
            let a = db.fetch(`muterole_${message.guild.id}`)

            if (!a) {
                return message.channel.send(e1)
            } else {
                let role = message.guild.roles.cache.get(a)
                db.delete(`muterole_${message.guild.id}`)

                message.channel.send(`**\`${role.name}\` Has Been Successfully Disabled**`)
            }
            return;
        } catch {
            return message.channel.send("**Error - `Missing Permissions or Role Doesn't Exist`**")
        }
    }
}
