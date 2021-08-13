const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    config: {
        name: "setnick",
        aliases: ["sn", 'nick'],
        category: "moderation",
        description: "Sets Or Changes Nickname Of An User",
        usage: "[mention | name | nickname | ID] <nickname>",
    },
    run: async (bot, message, args) => {

      const e1 =  new MessageEmbed()
       .setDescription(`❌ **You Dont Have Permissions To Change Nickname!**`)
       .setColor("#12abff")

             const e2 =  new MessageEmbed()
       .setDescription(`❌ **I Dont Have Permissions To Change Nickname!**`)
       .setColor("#12abff")

             const e3 =  new MessageEmbed()
       .setDescription(`❌ **Please Enter A User!**`)
       .setColor("#12abff")

             const e4 =  new MessageEmbed()
       .setDescription(`❌ **Please Enter A Username!**`)
       .setColor("#12abff")

                    const e5 =  new MessageEmbed()
       .setDescription(`❌ **Cannot Set or Change Nickname Of This User!**`)
       .setColor("#12abff")

                    const e6 =  new MessageEmbed()
       .setDescription(`❌ **Please Enter A Nickname**`)
       .setColor("#12abff")

        if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send(e1)

        if (!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.channel.send(e2)
      
        if (!args[0]) return message.channel.send(e3)
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.channel.send(e4)

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send(e5)

        if (!args[1]) return message.channel.send(e6)

        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor("#12abff")
            .setDescription(`<a:802803657820864522:875243426944270376> **Changed Nickname of ${member.displayName} to ${nick}**`)
        message.channel.send(embed)
        } catch {
            return message.channel.send("<a:729477543119552592:875237546370662460> **You don't have permission")
        }

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const sembed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#12abff")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "setnick")
            .addField("**Nick Changed Of**", member.user.username)
            .addField("**Nick Changed By**", message.author.username)
            .addField("**Nick Changed To**", args[1])
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(sembed)
    }
}