const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
  commands: "accept",
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<member>",
  run: (message, arguments, text) => {
   const member = message.guild.members.cache.find(
      (member) => member.id === message.author.id
    );
    if (!message.mentions.members.first()) {
      const embed = new Discord.MessageEmbed()
        .setColor(process.env.RED)
        .setTitle("Pls give a proper mention!");
      return message.channel.send(embed);
    }

    const trial = message.guild.roles.cache.find(
      (role) => role.id === "750007504259252304"
    );
    const dm = message.mentions.members.first();
    const dmEmbed = new Discord.MessageEmbed()
      .setTitle("<:check:765794920493088768> | Your application has been accepted.")
      .setDescription(` You are now trial at ${message.guild.name}`)
      .setColor(process.env.YELLOW);
    dm.send(dmEmbed);
    dm.roles.add(trial);
    const embed = new Discord.MessageEmbed()
      .setTitle("<:check:765794920493088768> | Acceptance has been sent")
      .setColor(process.env.YELLOW);
    message.channel.send(embed);
  },
  permission: "KICK_MEMBERS"
};
