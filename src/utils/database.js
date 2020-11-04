module.exports = {
  run: () => {
    const mongoose = require("mongoose");
    mongoose.connect(
      `mongodb+srv://SmolBot:SmolBotBest@smolbot.6ayox.mongodb.net/Data`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    mongoose.connection.on("connected", () => {
      console.log("Database connected!");
    });
  },
};
