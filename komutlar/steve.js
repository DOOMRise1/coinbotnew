const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  
  
  .setDescription(`:skin-tone-5: :skin-tone-5: :skin-tone-5: :skin-tone-5: :skin-tone-5: :skin-tone-5: :skin-tone-5: :skin-tone-5:
🏿 :skin-tone-5: :skin-tone-3: :skin-tone-3: :skin-tone-3: :skin-tone-3: :skin-tone-5: :skin-tone-5:
🏽 :skin-tone-3: :skin-tone-3: :skin-tone-3: :skin-tone-3: :skin-tone-3: :skin-tone-3: :skin-tone-3:
🏽 :white_large_square: ⬛🏽 :skin-tone-3: :black_large_square:⬜🏽
🏽 :skin-tone-3: :skin-tone-3: :skin-tone-5: :skin-tone-5: :skin-tone-3: :skin-tone-3: :skin-tone-3:
🏽 :skin-tone-3: :skin-tone-5: :skin-tone-3: :skin-tone-3: :skin-tone-5: :skin-tone-3: :skin-tone-3:
🏽 :skin-tone-3: :skin-tone-5: :skin-tone-5: :skin-tone-5: :skin-tone-5: :skin-tone-3: :skin-tone-3:`)
  
  
  return message.channel.sendEmbed(yardım);

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['steve'],
    permLevel: 0
  };

  exports.help = {
    name: 'steve',
    description: 'steve',
    usage: 'steve'
  };
