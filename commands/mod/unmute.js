const { MessageEmbed } = require("discord.js")
const db = require('quick.db');

module.exports = {
    config: {
        name: "unmute",
        aliases: ["um"],
        description: "Unmutes a member in the discord!",
        usage: "[name | nickname | mention | ID] <reason> (optional)"
    },
    run: async (bot, message, args) => {

      const e1 =  new MessageEmbed()
       .setDescription(`<a:729477543119552592:875237546370662460> **You dont have the permissions to unmute someone!**`)
       .setColor("#12abff")

       const e2 =  new MessageEmbed()
       .setDescription(`<a:729477543119552592:875237546370662460> **I don't have permissions to unmute someone!**`)
       .setColor("#12abff")

       const e3 =  new MessageEmbed()
       .setDescription(`<a:729477543119552592:875237546370662460> **Please enter a user!**`)
       .setColor("#12abff")

       const e4 =  new MessageEmbed()
       .setDescription(`<a:729477543119552592:875237546370662460> **Please enter a valid user!**`)
       .setColor("#12abff")

       const e5 =  new MessageEmbed()
       .setDescription(`<:733987631628550175:870949748604039189> **There is no mute role to remove!**`)
       .setColor("#12abff")

        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(e1)

        if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send(e2)
        if (!args[0]) return message.channel.send(e3)
        let mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!mutee) return message.channel.send(e4)

        let reason = args.slice(1).join(" ");

        let muterole;
        let dbmute = await db.fetch(`muterole_${message.guild.id}`);
        let muteerole = message.guild.roles.cache.find(r => r.name === "muted")

        if (!message.guild.roles.cache.has(dbmute)) {
            muterole = muteerole
        } else {
            muterole = message.guild.roles.cache.get(dbmute)
        }
      
        let rolefetched = db.fetch(`muteeid_${message.guild.id}_${mutee.id}`)
        if (!rolefetched) return;

        if (!muterole) return message.channel.send(e5)
        if (!mutee.roles.cache.has(muterole.id)) return message.channel.send("**User is not muted!**")
        try {
        mutee.roles.remove(muterole.id).then(() => {
            mutee.send(`**Hello, You Have Been Unmuted In ${message.guild.name} for ${reason || "No Reason"}**`).catch(() => null)
            let roleadds = rolefetched
            if (!roleadds) return;
            mutee.roles.add(roleadds)
        })
        } catch {
            let roleadds2 = rolefetched
            if (!roleadds2) return;
            mutee.roles.add(roleadds2)                            
          }
            const sembed = new MessageEmbed()
                .setColor("#12abff")
                .setDescription(`<a:802803657820864522:875243426944270376> ${mutee.user.username} was successfully unmuted.`)
            message.channel.send(sembed);
        

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        let embed = new MessageEmbed()
            .setColor("#12abff")
            .setThumbnail(mutee.user.displayAvatarURL({ dynamic: true }))
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**Moderation**", "unmute")
            .addField("**Unmuted**", mutee.user.username)
            .addField("**Moderator**", message.author.username)
            .addField("**Reason**", `${reason || "**No Reason**"}`)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

        var sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)

    }
}