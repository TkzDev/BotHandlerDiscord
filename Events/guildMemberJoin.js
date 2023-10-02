const Discord = require('discord.js')
const ConfigRoles = require('../Config/configRoles.json')
const ConfigChannel = require('../Config/configChannels.json')

module.exports = {
  name: 'guildMemberAdd',
  run: async (interaction, client) => {

    let time = Date().split(/ +/g)
    let memberRole = interaction.guild.roles.cache.get(ConfigRoles.defaultRoleMember)
    interaction.roles.add(memberRole)
    
    const embedJoin = new Discord.EmbedBuilder()
      .setColor('Random')
      .setTitle(`	Seja bem vindo ao servidor ${interaction.guild.name}!`)

      .setDescription(
        `**Entrou no servidor:** ${interaction}\n
        **Membros no Discord:** ${interaction.guild.memberCount}\n
        **Cargo default do membro:** ${memberRole}\n
        **Horário de entrada:** ${time[2], time[3], time[4]}`
      )
      .setFooter({ text: `Tkz ❤️ | © Todos os direitos reservados 2023`, iconURL: client.user.displayAvatarURL() })

      interaction.guild.channels.cache.get(ConfigChannel.channelEmbedJoin).send({ embeds: [embedJoin] })
  }
}