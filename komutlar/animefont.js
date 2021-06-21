const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:gif:855567879067140096>`)
  const linqo = `https://habbofont.net/font/battlebanzai/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.RichEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Anime Font Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'anime',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'anime <yazı>'
}