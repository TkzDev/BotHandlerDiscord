const Discord = require('discord.js')
const mongoose = require("mongoose");

module.exports = {
  name: 'ready',
  run:async (ready, interaction, config) => {
    console.log(`│ \x1b[32m[ BOT INICIADO ] \x1b[0mStatus: Online ✅`);
    console.log(`│`)
    console.log(`│ \x1b[32m[ BOT INICIADO ] \x1b[0mPrefix: [${config["defaultPrefix"]}]`);
    console.log(`│`);
    console.log(`│ \x1b[32m[ BOT INICIADO ] \x1b[0mVersion: 1.0`);
    console.log(`│`)
    console.log(`│ \x1b[32m[ BOT INICIADO ] \x1b[0mDesenvolvido por - Tkz ❤️`);
    // [ Conectando ao banco de dados]
    mongoose.set('strictQuery', true);
    mongoose.connect(config["userMongoDB"], {
    useNewUrlParser: true
    }).then(function () {
      console.log(`│`);
      console.log(`│ \x1b[32m[ BANCO DE DADOS ] \x1b[0mStatus banco de dados: Online ✅ User: ${mongoose.connection.db.databaseName}`);
      console.log(`│`);
      console.log(`│ \x1b[32m[ BANCO DE DADOS ] \x1b[0mBanco de dados acessado por - Tkz ❤️`);
      console.log(`│`);
    }).catch(function () {
      console.log('\x1b[31m[ BANCO DE DADOS ] \x1b[0mBanco de dados desligado por erro');
    });

    // [ Atualizando o status do bot ]
    setInterval(() => {
      let statusdesc = [ // ActivityType.Playing / ActivityType.Watching / ActivityType.Listening / ActivityType.Streaming / ActivityType.Competing
        { name: `❤️ | Desenvolvido por Tkz`, type: Discord.ActivityType.Playing },
        { name: `🥋 | Atualmente ${interaction.users.cache.size} Membros no servidor`, type: Discord.ActivityType.Watching }
      ]
    
      function status() {
        let randonstatus = statusdesc[Math.floor(Math.random() * statusdesc.length)];
        interaction.user.setActivity(randonstatus)
        interaction.user.setStatus("dnd")
      }


      status();
      status()
    }, 15000)
  }
}