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

       .setDescription(` <:733987631628550175:870949748604039189> **You Do Not Have The Required Permissions!** <:733987631628550175:870949748604039189>`)
      
       .setColor("#12abff")

              const e1 =  new MessageEmbed()

       .setDescription(`<a:729477543119552592:875237546370662460> **There is no mute role to disable** <a:729477543119552592:875237546370662460>`)
      
       .setColor("#12abff")

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(e2)

        try {
            let a = db.fetch(`muterole_${message.guild.id}`)

            if (!a) {
                return message.channel.send(e1)
            } else {
                let role = message.guild.roles.cache.get(a)
                db.delete(`muterole_${message.guild.id}`)

                message.channel.send(`<a:802803657820864522:875243426944270376> **\`${role.name}\` Has Been Successfully Disabled** <a:802803657820864522:875243426944270376>`)
            }
            return;
        } catch {
            return message.channel.send("<a:729477543119552592:875237546370662460> **Error - `Missing Permissions or Role Doesn't Exist`** <a:729477543119552592:875237546370662460>")
        }
    }
}
