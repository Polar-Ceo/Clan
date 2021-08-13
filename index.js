const { Listener } = require('discord-akairo');
const { Client, Collection } = require('discord.js');
const { PREFIX } = require('./config');
const mySecret = process.env['TOKEN'];
const bot = new Client({ disableMentions: 'everyone' });
const fs = require("fs");
const request = require("request");
const axios = require("axios");
const fetch = require("node-fetch");
const snekfetch = require("snekfetch");
const db = require('quick.db');
const express = require('express')

bot.commands = new Collection();
bot.aliases = new Collection();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handler/${x}`)(bot));

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(bot);
});

require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)

 bot.on("messageDelete", (messageDelete) => {

if(messageDelete.embeds[0]) return;

let embed = new Discord.MessageEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setColor("#fc3c3c")
  .addField("Author", messageDelete.author.tag, true)
  .addField("Channel", messageDelete.channel, true)
  .addField("Message", messageDelete.content)
  .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`);

let DeleteChannel = messageDelete.guild.channels.cache.find(x => x.name === "🔒-polar-logs");
if(DeleteChannel) DeleteChannel.send(embed);

});

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  if (!member.guild) return;
  let guild = member.guild
  let channel = guild.channels.cache.find(c => c.name === "😾-join-leave");
  let membercount = guild.members
  if (!channel) return;
  let embed = new Discord.MessageEmbed()    
  .setColor("#5d87e9") 
  .setTitle("<a:802803657820864522:875243426944270376> New Server Member! <a:802803657820864522:875243426944270376>")
   .setDescription(`**Welcome**, ${member} **to ${guild.name} \n Amount of members ${member.guild.memberCount}**`)
    .setThumbnail(member.user.displayAvatarURL())
  channel.send(embed);
});
client.on('guildMemberRemove', member => {
    if (!member.guild) return;
  let guild = member.guild
  let channel = guild.channels.cache.find(c => c.name === "😾-join-leave");
  let membercount = guild.members
  if (!channel) return;
  let embed = new Discord.MessageEmbed() 
    .setColor("#5d87e9") 
    .setTitle("<a:729477543119552592:875237546370662460> Member has left the sever! <a:729477543119552592:875237546370662460>")
    .setDescription(`**Someone has left ${guild.name} goodbye** 
    **Amount of members ${member.guild.memberCount}**`)
    .setThumbnail(member.user.displayAvatarURL())
  channel.send(embed);
});

client.on("message", async message => {
  if(message.content.startsWith("!reaction")){
    const args = message.content.split(" ");
    if(!args[1]) return message.channel.send("**Example :** `<emoji> <message Id> <role Id>`");
    if(!args[2]) return message.channel.send("There must be an id for the message");
    if(isNaN(args[2])) return message.channel.send("Please include a valid message id");
    if(!args[3]) return message.channel.send("Please include the id of the role ID");
    if(isNaN(args[3])) return message.channel.send("Please include a valid ID for the role that should be given upon reaction.");
    let emoji = ReactionEmojiGrab(args[1]);
    if(!isNaN(emoji)) emoji = client.emojis.cache.get(emoji);
    try{
      const msg = await message.channel.messages.fetch(args[2]);
      await msg.react(emoji);
      
      db.push(`${message.guild.id}.reactionroles`, 
        {
          message: msg.id,
          emoji: emoji.id || emoji,
          role: args[3]
        }
      );
    }catch(e){
      message.channel.send("Error\n" + e);
    }
  }
})

client.on("messageReactionAdd", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.add(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})
client.on("messageReactionRemove", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}.reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.remove(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

function ReactionEmojiGrab(reactionArg){
  const contents = reactionArg.substring(1, reactionArg.length - 1).split(":");
  if(contents.length > 1){
    return contents[2];
  }else{
    return reactionArg;
  }
}


client.on("message", message => {
if(message.content.toLowerCase() === "<@!786396613874679868>") message.channel.send(
"**ii is cool**"
);

if(message.content.toLowerCase() === "<@!853442632570241066>") message.channel.send(
"**Yuh Icy is cool**"
);

if(message.content.length > 1500) {
if(!message.member || !message.member.hasPermission("KICK_MEMBERS")){
 let embed = new Discord.MessageEmbed()
.setTitle("<:733987631628550175:870949748604039189> **Stop spamming **<:733987631628550175:870949748604039189> ")
.setDescription("**Stop spamming the channel or you will be muted**")
.setColor("")
message.channel.send(embed);
message.delete()
}
};
 if(message.content.toLowerCase().includes('discord.gg/')||
 message.content.toLowerCase().includes('https://')){
 if(!message.member || !message.member.hasPermission("SEND_MESSAGES")){
 let embed = new Discord.MessageEmbed()
 .setTitle("<:733987631628550175:870949748604039189> **¿Why are you talking to a bot? **<:733987631628550175:870949748604039189> ")
 .setDescription("**Stop sending links to me thanks.**")
 .setColor("")
 message.channel.send(embed);
 } else {
 if (message.member.hasPermission("EMBED_LINKS")) return;
 const whotosend = message.author
 message.delete()
 whotosend.send(`${message.author},<:733987631628550175:870949748604039189> **Do not send links or you will be muted **<:733987631628550175:870949748604039189>`)
 message.channel.send(`${message.author},<:733987631628550175:870949748604039189> **Don't send links warning **<:733987631628550175:870949748604039189>`)
 }
 }
 if(db.has(message.author.id + '!afk')){
 message.channel.send(`Welcome back ${message.author}`)
 db.delete(message.author.id + '!afk')
 db.delete(message.author.id + '-messageafk')
 }
 if (message.content.startsWith('!afk')) {
 message.channel.send(`${message.author} I have now set you as AFK.`)
 db.set(message.author.id + '!afk','true')
 db.set(message.author.id + '-messageafk', message.content.split(' ').slice(2))
 }
 if (message.content.includes('-afk off')) {
 db.delete(message.author.id + '!afk')
 db.delete(message.author.id + '!messageafk')
 }
 message.mentions.users.forEach(user =>{
 if (message.author.bot) return false;
 if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
 if(db.has(user.id + '!afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK.`)
 })

 });
 client.login(process.env.TOKEN);
 bot.login(mySecret);