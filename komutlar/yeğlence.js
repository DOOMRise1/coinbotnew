//deneme komut buraya gelicekmi diye bakıyorum hadi inş
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');


exports.run = (client, message, args) => {
 const embed = new Discord.RichEmbed()
  .setColor('DARK_RED') 
  .setThumbnail("https://cdn.discordapp.com/attachments/855154831899361353/855561519856877588/BEST.png")
  .setTimestamp()
  .setDescription (` 
   **<a:gif:855567879067140096> BEST BOT Eğlence Komutları <a:gif:855567879067140096>**
   
    <a:tik:855570616690147338> - **Eğlence Komutları**
    
    *kralol, çekiç, davet, emojiyazı, kaçcm, medya, yapımcım, steve, stresçarkı, davetkur, kartopu, efkar, balıktut*
    
    ***Prefix: b***
  `) //böyle yaparak çok güzel oluyor ve çok anlamlı ve düzenli hadi bakalım
  .setImage(`https://cdn.discordapp.com/attachments/855896918025830475/855901440483917834/standard.gif`)
  .setFooter(client.user.username, client.user.avatarURL);
  
  
   return message.channel.send(embed);  
  }

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["eğlence"],
  permLevel: 0 
};

exports.help = {
  name: 'eğlence', 
  description: 'eğlence',
  usage: 'eğlence'
};
