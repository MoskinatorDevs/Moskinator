module.exports = {
  run: function (token, command, event) {
    //Variables
    const path = require("path");
    const fs = require("fs");

    const Discord = require("discord.js");
    const client = new Discord.Client({
      partials: ["MESSAGE", "CHANNEL", "REACTION"],
    });

    //Login
    client.login(token);

    //Command Handler
    const commandHandler = require("../utils/command");
    commandHandler.run(command, fs, path, client);

    //Event Handler
    const eventHandler = require("../utils/event");
    eventHandler.run(event, fs, path, client);

    // DB Handler
    const dbHandler = require("../utils/database");
    dbHandler.run();
  },
};
