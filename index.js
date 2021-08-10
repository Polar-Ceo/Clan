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

let DeleteChannel = messageDelete.guild.channels.cache.find(x => x.name === "delete-log");
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
  .setTitle("<a:845395692955762728:868993049865388143> New Server Member! <a:845395692955762728:868993049865388143>")
   .setDescription(`**Welcome**, ${member} to **${guild.name} Amount of members ${member.guild.memberCount}**`)
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
    .setTitle("<:824897023584632832:864764658300092426> Member has left the sever! <:824897023584632832:864764658300092426> ")
    .setDescription(`**Someone has left ${guild.name} goodbye** 
    **Amount of members ${member.guild.memberCount}**`)
    .setThumbnail(member.user.displayAvatarURL())
  channel.send(embed);
});
client.on("message", message => {
if(message.content.toLowerCase() === "beep") message.channel.send(
"boop"
);

if(message.content.length > 1500) {
if(!message.member || !message.member.hasPermission("KICK_MEMBERS")){
 let embed = new Discord.MessageEmbed()
.setTitle("<:824897023584632832:864764658300092426> **¿Why are you spamming? **<:824897023584632832:864764658300092426>  ")
.setDescription("**Stop spamming the channel**")
.setColor("")
message.channel.send(embed);
message.delete()
}
};
if(message.content.toLowerCase().includes('discord.gg/')||
message.content.toLowerCase().includes('https://')){
if(!message.member || !message.member.hasPermission("SEND_MESSAGES")){
let embed = new Discord.MessageEmbed()
.setTitle("<:661442915691659265:864764653589495818> **¿Why are you talking to a bot? **<:661442915691659265:864764653589495818> ")
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
 if(db.has(message.author.id + '-afk')){
 message.channel.send(`Welcome back ${message.author}`)
 db.delete(message.author.id + '-afk')
 db.delete(message.author.id + '-messageafk')
 }
 if (message.content.startsWith('-afk')) {
 message.channel.send('Aight, I have set your AFK. I will send a message to the users who mention you..')
 // then here you use the database :
 db.set(message.author.id + '-afk','true')
 db.set(message.author.id + '-messageafk', message.content.split(' ').slice(2))
 }
 if (message.content.includes('-afk off')) {
 db.delete(message.author.id + '-afk')
 db.delete(message.author.id + '-messageafk')
 }
 // If one of the mentions is the user
 message.mentions.users.forEach(user =>{
 if (message.author.bot) return false;

 if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
 if(db.has(user.id + '-afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK. Leave a message if urgent by DMing him`)
 })


});
client.login(process.env.TOKEN);
bot.login(mySecret);


