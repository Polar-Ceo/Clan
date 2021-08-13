const { MessageEmbed } = require('discord.js');
const db = require("quick.db");

module.exports = {
  config: {
    name: "setmuterole",
    aliases: ["setmute", "smrole", "smr"],
    description: "Sets A Mute Role For Muted Users!",
    usage: "[role name | role mention | role ID]",
  },
  run: async (bot, message, args) => {

    const e1 =  new MessageEmbed()
       .setDescription(`❌ **You Do Not Have The Required Permissions!**`)
       .setColor("#12abff")

           const e2 =  new MessageEmbed()
       .setDescription(`❌ **Please Enter A Role Name or ID To Set!**`)
       .setColor("#12abff")

                  const e3 =  new MessageEmbed()
       .setDescription(`❌ **Please Enter A Valid Role Name or ID!**`)
       .setColor("#12abff")

                  const e4 =  new MessageEmbed()
       .setDescription(`<a:802803657820864522:875243426944270376> **This Role is Already Set As Muterole!**`)
       .setColor("#12abff")



    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(e1)
      
    if (!args[0]) {
      let b = await db.fetch(`muterole_${message.guild.id}`);
      let roleName = message.guild.roles.cache.get(b);
      if (message.guild.roles.cache.has(b)) {
        return message.channel.send(
          `<a:802803657820864522:875243426944270376> **Muterole Set In This Server Is \`${roleName.name}\`!**`
        );
      } else
        return message.channel.send(e2)
        
    }

    let role =
      message.mentions.roles.first() ||
      bot.guilds.cache.get(message.guild.id).roles.cache.get(args[0]) ||
      message.guild.roles.cache.find(
        c => c.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
      );

    if (!role)
      return message.channel.send(e3)

    try {
      let a = await db.fetch(`muterole_${message.guild.id}`);

      if (role.id === a) {
        return message.channel.send(e4)
        
      } else {
        db.set(`muterole_${message.guild.id}`, role.id);

        message.channel.send(
          `<a:802803657820864522:875243426944270376> **\`${role.name}\` Has Been Set Successfully As Muterole!**`
        );
      }
    } catch (e) {
      return message.channel.send(
        "**Error - `Missing Permissions or Role Doesn't Exist!`**",
        `\n${e.message}`
      );
    }
  }
};
