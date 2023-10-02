const Discord = require('discord.js')

module.exports = {
  name: 'ready',
  run:async (ready, interaction, config) => {
    console.log(interaction.users);
    console.log(`│ Status: Online ✅`);
    console.log(`│`)
    console.log(`│ Prefix: [${config.defaultPrefix}]`);
    console.log(`│`);
    console.log(`│ Version: 1.0`);
    console.log(`│`)
    console.log(`│ Desenvolvido por - Tkz ❤️`);
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