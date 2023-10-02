const Discord = require("discord.js")
const fs = require('fs')
const discordModals = require('discord-modals');
const config = require("../BotHandlerDiscord/Config/config.json")
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.DirectMessages,
    Discord.GatewayIntentBits.MessageContent
  ]
});

module.exports = client

client.on('interactionCreate', (interaction) => {

  if (interaction.type === Discord.InteractionType.ApplicationCommand) {

    const cmd = client.slashCommands.get(interaction.commandName);

    if (!cmd) return interaction.reply(`Error`);

    interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

    cmd.run(client, interaction)

  }
})

// Event Handller

const eventFolder = fs.readdirSync("./Events").filter(f => f.endsWith('.js'));

for (file of eventFolder) {
  const event = require(`./Events/${file}`)

  if (event.once) {
    client.once(event.name, (...args) => event.run(...args, client, config))
  } else {
    client.on(event.name, (...args) => event.run(...args, client, config))
  }
}

client.slashCommands = new Discord.Collection()

require('./Handler')(client)

// Erro no Handling

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("[ ⛔ DANGER ⛔ ] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log('Bloqueado');
  console.log(err, origin);
});


client.login(config.token)
discordModals(client);