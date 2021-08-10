var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#dbbbff`)
    .setTitle("\`MY COMMANDS\`")
    .addField('Prefix Information', `Prefix: \`!\`\n<:854992808305360906:856002172297543730>You can also use **!prefix** for my prefix<:854992808305360906:856002172297543730>

`)
    
    .addField(`**🛡️ ❯ MODERATION **`,"`warn`,`unmute`,`unbanall`,`unban`,`setnick`,`role`,`purge`,`mute`,`kick`, `ban`,`nuke`,`dm`,`unlock`,`lockdown`,`start-giveaway`,`end-giveaway`, \n`reroll-giveaway`,`tempmute`")
    .addField(`**⚙️ ❯ SETUP & INFO'S **`,"`channelinfo`,`disablemodlogchannel`,`disablemuterole`,`reloadmod`, `rolememeberinfo`,`setmodlogchannel`,`setmuterole`,`setnick`,`applestore`, `serverinfo`,`serverlist`,`playstore`,`whois`,`prefix`" )
    .addField(` **🤪 ❯ FUN **`,"`wasted`,`weather`,`whatsapp`,`wink`,`ytsearch`,`voicemove`,`slap`,`stats`, `triggered`,`uptime`,`vaportext`,`jail`,`avatar`,`connect`")
    .addField(` **🎵 ❯ MUSIC **`,"`clearqueue`,`loop`,`pause`,`play`,`queue`,`resume`,`search`,`skip`,`stop`,`volume`")
    .addField(` **❯ LINKS **`,`   [DISCORD SERVER](https://discord.gg/ZQxhVP7hNk)`+` - `+`[ROBLOX GROUP](https://www.roblox.com/groups/11160097/Rabvaxr#!/about)`)

message.channel.send(log);
}
}
}
