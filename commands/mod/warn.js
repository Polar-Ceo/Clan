const { MessageEmbed } = require('discord.js')

module.exports = {
    config: {
        name: "warn",
        description: "warn members",
        usage: "m/warn <mention member/member id> [reason]",
        aliases: []
    },
    run: async (bot, message, args) => {

      const e1 =  new MessageEmbed()
       .setDescription(`<a:802803657820864522:875243426944270376> **Please mention a valid member of this server**`)
       .setColor("#12abff")
        let warnPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("❌ **Sorry, you don't have permissions to use this!**")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply(e1)
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No Reason Provided)";
            
            member.send(`<a:729477543119552592:875237546370662460> <@${member.user.id}> You have been warned by <@${message.author.id}> for this reason: ${reason}`)

            let warnEmbed = new MessageEmbed()
            .setTitle("**__Warn Report__**")
             .setColor("#12abff")
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Warn\``)
            .addField(`**Moderator:**`, `${message.author}`)

            message.channel.send(warnEmbed)

    }
}