const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
 const embed = new Discord.RichEmbed()
  .setColor('DARK_RED') 
  .setThumbnail("https://cdn.discordapp.com/attachments/855154831899361353/855561519856877588/BEST.png")
  .setTimestamp()
  .setDescription (`
   **<a:gif:855567879067140096> BEST BOT Yardım Komutları <a:gif:855567879067140096>**
   
    <a:tik:855570616690147338> - **beğlence**
    Eğlence Komutları
    
    <a:tik:855570616690147338> - **byetkiyardım**
    Admin Komutları
    
    <a:tik:855570616690147338> - **bdiğer**
    Diğer Komutlar
    
    <a:tik:855570616690147338> - **bparamenu**
    Para Komutları
    
    ***Prefix: b***
  
  `)
  .setImage(`https://cdn.discordapp.com/attachments/855896918025830475/855901440483917834/standard.gif`)
  .setFooter(client.user.username, client.user.avatarURL);
  
  
   return message.channel.send(embed);  
  }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["help"],
  permLevel: 0 
};

exports.help = {
  name: 'help', 
  description: 'help',
  usage: 'help '
};
