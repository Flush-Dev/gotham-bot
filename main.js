const { Client, MessageEmbed } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("Je suis pret !");
  client.user.setActivity('Gotham', { type: 'STREAMING' })
});

client.on('message', msg => {
  var args = msg.content.split(` `).slice(1).join(' ');
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send('Pong!');
  if (msg.content == 'Lulu') msg.channel.send("Ma couille droite que je caresse chaque matin");
  if (msg.content == 'Gotham') msg.channel.send("Le meilleur serveur !");
  if (msg.content == 'Leey') msg.channel.send("La femme de Flush, a ne pas touchée !")
  if (msg.content.startsWith(`${PREFIX}say`)) { 
    msg.delete();
     msg.channel.send(args);
  }
     if (msg.content.startsWith(`${PREFIX}pp`)) {
       msg.delete();
       const pp = new MessageEmbed()
       .setAuthor('Gotham')
       .setThumbnail(`${message.author.avatarURL}`)
       msg.channel.send(pp);
     };
  
});
client.login(TOKEN);