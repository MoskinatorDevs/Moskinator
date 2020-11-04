const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  commands: "suggestion",
  minArgs: 1,
  expectedArgs: "<msg>",
  run: (message, arguments, text) => {
    const weebhookClient = new Discord.WebhookClient('745977836258459728', 'x5hE_iEaUAjc3cLV9bqYyuyW4hq78ecsWADhzd_SKWtLQtadLLOKfLKMDhAF5ZBjq1g5')

    // const embed = new Discord.MessageEmbed()
    //   .setTitle(`**Suggestion by ${message.member.displayName}**`)
    //   .setDescription(message.content.substring(13))
    //   .setcolor(message.member.displayColor)
    const embed = new Discord.MessageEmbed()
    .setTitle(`**Suggestion by ${message.member.displayName}**`)
    .setDescription(text)
    .setColor(message.member.displayHexColor)
    weebhookClient.send('', {
      username: message.member.displayName,
      avatarURL: message.author.avatarURL({ dynamic: true, format: 'png' }),
      embeds: [embed]
    })
  },
};
