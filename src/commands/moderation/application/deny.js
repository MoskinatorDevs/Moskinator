const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
  commands: "deny",
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<member>",
  run: (message, arguments, text) => {
    const member = message.member;
    if (!message.mentions.members.first()) {
      const embed = new Discord.MessageEmbed()
        .setColor(process.env.RED)
        .setTitle("Pls give a proper mention!");
      return message.channel.send(embed);
    }

    const dm = message.mentions.members.first();
    dm.send({
      embed:
        {
          title: `<:x_:765794922602430464> |  Your application has been denied at ${message.guild.name}.`,
          color: process.env.RED
        }
      });
    const embed = new Discord.MessageEmbed()
      .setTitle("<:check:765794920493088768> | Denial has been sent")
      .setColor(process.env.YELLOW);
    message.channel.send(embed);

    db.set(
      `applyDuration_${message.guild.id}_${message.mentions.users.first().id}`,
      Date.now()
    );
  },
  permission: "KICK_MEMBERS"
};
