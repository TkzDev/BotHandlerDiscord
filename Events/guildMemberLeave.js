const Discord = require('discord.js')
const ConfigChannel = require('../Config/configChannels.json')

module.exports = {
  name: 'guildMemberRemove',
  run: async(interaction, client) => {
    let time = Date().split(/ +/g)    

    const embedLeave = new Discord.EmbedBuilder() 
    .setColor('Random')
    .setTitle(`	Um membro acbou de sair do servidor ${interaction.guild.name}!`)

    .setDescription(
      `**Saiu do servidor:** ${interaction}\n
      **Membros no Discord:** ${interaction.guild.memberCount}\n
      **Cargos do membro:** <@&${interaction._roles.toString().replace(/,/g, '> <@&')}>\n
      **Horário de saída:** ${time[2], time[3], time[4]}`
    )
    .setFooter({ text: `Tkz ❤️ | © Todos os direitos reservados 2023`, iconURL: client.user.displayAvatarURL() })

    interaction.guild.channels.cache.get(ConfigChannel.channelEmbedLeave).send({ embeds: [embedLeave] })
  }
}