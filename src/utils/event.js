module.exports = {
  run: (event, fs, path, client) => {
    var baseFile = "event-base.js";
    var eventBase = require(`../events/${baseFile}`);

    const readEvents = (dir) => {
      const files = fs.readdirSync(path.join(__dirname, dir));
      for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file));
        if (stat.isDirectory()) {
          readEvents(path.join(dir, file));
        } else if (file !== baseFile) {
          const option = require(path.join(__dirname, dir, file));
          eventBase(client, option);
        }
      }
    };

    readEvents(event);
  },
};
