// Server
const Server = require('../Server.js')

Server.run();

// Bot
const token = process.env.TOKEN;
const Client = require("./client/Client");

Client.run(token, "../commands", "../events");
