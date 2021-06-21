const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
   client.user.setStatus('online') 
var oyun = [
         `Rain_Nagi 💙 1Ripeness`,
         "help?: bhelp",
         "Coder By 1Ripeness",
         "BEST 💙 BOT"
   
  // Kafanıza Göre Değişebilirsiniz Durum Kısmı Bura
    ];

  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random] ,{
        type: "STREAMING",
        url: "https://www.twitch.tv/1Ripeness"
                                });
      
        }, 2 * 5000);

};
