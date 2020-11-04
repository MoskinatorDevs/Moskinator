module.exports = {
  run: (command, fs, path, client) => {
    var baseFile = "command-base.js";
    var commandBase = require(`../commands/${baseFile}`);

    const readCommands = (dir) => {
      const files = fs.readdirSync(path.join(__dirname, dir));
      for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file));
        if (stat.isDirectory()) {
          readCommands(path.join(dir, file));
        } else if (file !== baseFile || file.endsWith === ".js") {
          const option = require(path.join(__dirname, dir, file));
          commandBase(client, option);
        }
      }
    };

    readCommands(command);
  },
};
