module.exports = {
  run: function () {
    // Variables
    const express = require("express");
    const app = express();

    // Server
    app.get("/", (req, res) => {
      res.send(`Server Online`);
    });
  },
};
