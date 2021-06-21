const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) 
    return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);  
  try {
        await message.channel.send(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commandstam", "cmdstam", "cmdtam"],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlartam',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
