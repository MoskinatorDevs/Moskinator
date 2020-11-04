const db  = require('quick.db')
const ms = require('parse-ms')
const { MessageEmbed } = require('discord.js')
module.exports = {
  commands: "apply",
  minArgs: 0,
  maxArgs: 0,
  run: async (message, arguments, text) => {
    let timeout = 604800000;

    let applyDuration = await db.fetch(
      `applyDuration_${message.guild.id}_${message.author.id}`
    );

    if (applyDuration !== null && timeout - (Date.now() - applyDuration) > 0) {
      let time = ms(timeout - (Date.now() - applyDuration));

      const embed = new MessageEmbed()
        .setTitle(`**You already applied! Come back in**`)
        .setDescription(
          `\`${time.days}d, ${time.hours}h, ${time.minutes}m, ${time.seconds}s!\``
        )
        .setColor(process.env.RED);
      message.channel.send(embed);
      return;
    } else {
      const embed1 = new MessageEmbed()
        .setColor(process.env.YELLOW)
        .setTitle("<:check:765794920493088768> | Pls check your DMs for the application!");
      message.channel.send(embed1);
      const questions = [
        `**Whats your Discord tag?**\n\`Example: Noobie#4453\``, 
        `**How old are you, and what is your gender?**\n\`Example: 8, male\``, 
        `**What is your IGN?**\n\`Example: Noobie\``, 
        `**Why do you want to be a staff member?**`, 
        `**What impact would you create after joining the staff team?**`, 
        `**Why would we choose you over many others? **`, 
        `**Any other information you want to share**`, 
      ];
      const dmChannel = await message.author.send(
        "Welcome to your application. Pls answer the questions I will give you!"
      );
      const collector = dmChannel.channel.createMessageCollector(
        (msg) => msg.author.id === message.author.id
      );
      let i = 0;
      const res = [];
      dmChannel.channel.send(questions[0]);
      collector.on("collect", async (msg) => {
        if (questions.length == i) return collector.stop("MAX");
        const answer = msg.content;
        res.push({ question: questions[i], answer });
        i++;
        if (questions.length == i) return collector.stop("MAX");
        else {
          dmChannel.channel.send(questions[i]);
        }
      });
      collector.on("end", async (collected, reason) => {
        if (reason == "MAX") {
          const embed = new MessageEmbed()
            .setTitle(
              `**${
                message.member.username || message.author.username
              } (userId: ${
                message.member.id || message.author.id
              }) submitted an application!**`
            )
            .setDescription(
              `${res
                .map((d) => `${d.question}:\n${d.answer}`)
                .join("\n\n")}`
            )
            .setColor(process.env.YELLOW);
          const data = message.guild.channels.cache.find(
            (ch) => ch.id === `759325183483052042`
          );
          await data.send(embed);
          await dmChannel.channel.send(
            "Thankyou, we will now review your application!"
          );
        }
      });
    }
  },
};
