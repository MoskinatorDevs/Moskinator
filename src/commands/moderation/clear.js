const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
  commands: "clear",
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<amnt>",
  run: (message, arguments, text) => {
    let amnt = arguments[0]
    
    if (amnt === 'all' || amnt === 'All' || amnt === 'a' || amnt === 'A') amnt = 99

    if (isNaN(amnt)) {
      message.reply(`__**ERROR: ${arguments[1]} IS NOT A NUMBER!!**__`)
      return
    }

    if (amnt >= 99) {
      message.reply(`__**ERROR: CHOOSE A NUMBER BELLOW 99 OR TYPE ALL**__`)
      return
    }
    async function clear() {
      message.delete()
      const fetched = await message.channel.messages.fetch({limit:arguments[1]})
      message.channel.bulkDelete(fetched)
    }
    clear()
  },
  permission: "ADMINISTRATOR"
};
