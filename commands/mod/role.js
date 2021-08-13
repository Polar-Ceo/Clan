const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");

module.exports = {
  config : {
    name: 'role',
    description: 'Add or remove a role to a user',
    category: 'moderation',
     aliases: ['r'],
    usage: 'c!<user mention, id or username> <role name, id or mention>',
    aliases: [],
    botPermission: ['MANAGE_ROLES'],
    authorPermission: ['MANAGE_ROLES'],
    testOnly: false,
    ownerOnly: false
  },
    run: async (bot, message, args) => {
        let warnPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("❌ **Sorry, you don't have permissions to use this!**")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])

        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(x => x.name.toLowerCase() === args.slice(1).join(" ") || x.name === args[1])

        if (!user) {
          const embed = new MessageEmbed()
               .setDescription(`❌ You need to specify a valid member`)
               .setColor('#12abff')
            return message.channel.send(embed)
        }

        if (!role) {
           const embed = new MessageEmbed()
          .setDescription(`❌ You need to specify a valid role`)
               .setColor('#12abff')
            return message.channel.send(embed)
        }     
        
        if (message.guild.me.roles.highest.id === role.id) {
            return message.channel.send(`❌ I cannot add or remove that role because that is my highest role`)}
      
          
         

        if (user.roles.cache.has(role.id)) {
            try {
                user.roles.remove(role.id)
                
           const embed = new MessageEmbed()
          .setDescription(`<a:729477543119552592:875237546370662460> Changed roles for ${user.user.tag}, -${role.name}
`)
               .setColor('#12abff')
            return message.channel.send(embed)
            
               
            }
            catch (e) {
                return message.channel.send(`There was an error: ${e}`)
            }
        } else {
            try {
                user.roles.add(role.id)
           const embed = new MessageEmbed()
          .setDescription(`<a:802803657820864522:875243426944270376> Changed roles for ${user.user.tag}, +${role.name}<:854992808305360906:856002172297543730>`)
               .setColor('#12abff')
            return message.channel.send(embed)
             
               
            }
            catch (e) {
                return message.channel.send(`There was an error: ${e}`)
            }
        }
    }
}