const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    config: {
        name: "kick",
        category: "moderation",
        description: "Kicks the user",
        accessableby: "Administrator",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        aliases: [],
    },
    run: async (bot, message, args) => {
      const em1 =  new MessageEmbed()
      .setDescription(`You Do Not Have Permissions To Kick Members`)
      .setColor("#12abff")

      const em2 =  new MessageEmbed()
      .setDescription(`<:733987631628550175:870949748604039189> I Do Not Have Permissions To Kick Members!`)
      .setColor("#12abff")

      const em3 =  new MessageEmbed()
      .setDescription(`<a:729477543119552592:875237546370662460> **Please provide a user to kick!**`)
      .setColor("#12abff")

      const em4 =  new MessageEmbed()
      .setDescription(`<a:729477543119552592:875237546370662460> **You are unable to kick yourself**`)
      .setColor("#12abff")

      const em5 =  new MessageEmbed()
      .setDescription(`<:733987631628550175:870949748604039189> **You are unable to kick this user**`)
      .setColor("#12abff")

      const em6 =  new MessageEmbed()
      .setDescription(`<:733987631628550175:870949748604039189> **I cannot kick my bot family**`)
      .setColor("#12abff")

        try {
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(em1);
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(em2);

            if (!args[0]) return message.channel.send(em3)

            var kickMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!kickMember) return message.channel.send("<a:729477543119552592:875237546370662460> **User Is Not In The Guild!**");


            if (kickMember.id === message.member.id) return message.channel.send(em4);
             

            if (!kickMember.kickable) return message.channel.send(em5);

            if (kickMember.user.bot) return message.channel.send(em6);

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new MessageEmbed()
                    .setColor("#12abff")
                    .setDescription(`**You Have Been Kicked From ${message.guild.name} for - ${reason || "No Reason!"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                kickMember.send(sembed2).then(() =>
                    kickMember.kick()).catch(() => null)
            } catch {
                kickMember.kick()
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("#12abff")
                .setDescription(`<:733988422405980211:868915509939273799> **${kickMember.user.username}** has been kicked reaction : ${reason}`)
            message.channel.send(sembed);
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("#12abff")
                .setDescription(`<:733988422405980211:868915509939273799> **${kickMember.user.username}** has been kicked`)
            message.channel.send(sembed2);
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#12abff")
                .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "kick")
                .addField("**User Kicked**", kickMember.user.username)
                .addField("**Kicked By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
}