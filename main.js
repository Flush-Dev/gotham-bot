const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjM4OTE1NTExNjYwNTc2ODIx.Xby5Mw.ReM42aa3bnKO3tAPW-8Q4XXv0BE');