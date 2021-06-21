const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setDescription(
      `[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1074120776)`
    )
    .setImage(`https://cdn.discordapp.com/attachments/855896918025830475/855901440483917834/standard.gif`)
    .setColor("BLACK")
    .setFooter(client.user.username, client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
