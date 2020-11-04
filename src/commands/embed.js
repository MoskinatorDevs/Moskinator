const Discord = require('discord.js')
module.exports = {
  commands: "embed",
  minArgs: 0,
  maxArgs: 0,
  run: (message, arguments, text) => {
    const embed = new Discord.MessageEmbed()
      .setTitle(`**Color Roles**`)
      .setDescription(`React to change your name color!!`)
      .addFields(
        {
          name: `<:yellow:762140428396265472>`,
          value: '`yellow`',
          inline: true,
        },
        {
          name: `<:white:762140427582701609>`,
          value: '`white`',
          inline: true,
        },
        {
          name: `<:red:762140428538740746>`,
          value: '`red`',
          inline: true,
        },
        {
          name: `<:purple:762140427343757334>`,
          value: '`purple`',
          inline: true,
        },
        {
          name: `<:pink:762140427842748438>`,
          value: '`pink`',
          inline: true,
        },
        {
          name: `<:orange:762140428333613056>`,
          value: '`orange`',
          inline: true,
        },
        {
          name: `<:lime:762140427834753034>`,
          value: '`lime`',
          inline: true,
        },
        {
          name: `<:green:762140428035424306>`,
          value: '`green`',
          inline: true,
        },
        {
          name: `<:cyan:762140428031492116>`,
          value: '`cyan`',
          inline: true,
        },
        {
          name: `<:brown:762140428018778122>`,
          value: '`brown`',
          inline: true,
        },
        {
          name: `<:blue:762140427917721631>`,
          value: '`blue`',
          inline: true,
        },
        {
          name: `<:black:762140427289100301>`,
          value: '`black`',
          inline: true,
        },
      )
      .setColor(process.env.YELLOW)
    message.channel.send(embed)
    
  },
  permission: "ADMINISTRATOR"
};
