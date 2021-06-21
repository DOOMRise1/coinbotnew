const Discord = require('discord.js')
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");

exports.run = function(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) 
    return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const embed = new Discord.RichEmbed()
.setTimestamp()
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.addField(` ***( ${client.user.username} )*** 'de Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
  message.channel.send(embed)
  
  
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cmds'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "cmds",
  description: "cmds",
  usage: "cmds"
};
