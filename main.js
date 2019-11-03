const { Client, MessageEmbed } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client({ disableEveryone: true });

client.on('message', msg => {
  client.user.setActivity('Gotham', { type: 'STREAMING' });
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g)
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) msg.channel.send('Pong!');
  if (cmd === `${PREFIX}say`) {
    msg.channel.send(args.join(" "));
    msg.delete().then(console.log("un message a ete delete"));
  }

  /*
 if (cmd === `${PREFIX}mpall`) {
    if (msg.deletable) msg.delete();
    if (msg.channel.type === "dm") return;
    if (!args) return msg.channel.send(":skull_crossbones: ERROR 404 :skull_crossbones:");
    msg.guild.members.forEach(member => {
      member.send(argrs.join(" ")).catch(e => {});
    });
    }
  
  if (cmd === `${PREFIX}embed`) {
    const emb = new MessageEmbed()
    .setAuthor("Gotham")
    .setColor("RANDOM")
    .setDescription(args.join(" "));
    msg.channel.send(emb);
    msg.delete().then(console.log("un message a ete delete"));
  }
*/
  if (cmd == `${PREFIX}search`) {
    let argsearch = msg.content.split(' ')
    args.shift()
    msg.reply('Voici les résultats de la recherche : https://www.google.fr/search?q=' + argsearch.join("%20"))
    msg.delete();
  } 

  if (cmd === `${PREFIX}pp`) {
    const pp = new MessageEmbed()
    .setAuthor("Gotham")
    .setColor("#1bf0ee")
    .setDescription(`Voici ta pp ${msg.author.tag}`)
    .setImage(msg.author.avatar)
    .setTimestamp();
    msg.delete();
    msg.channel.send(pp)
  }

});

client.on("guildMemberAdd", member => {
  member.send("Salut, bienvenue à toi sur Gotham !");
  const channel = client.channels.find(r => r.name === "gotham-bot");
  channel.send(`${member} a rejoint le serveur !`);

});

client.login(TOKEN);

client.on('ready', () => console.log("Je suis pret !")); 
//client.user.setActivity('Gotham', { type: 'STREAMING' })
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);