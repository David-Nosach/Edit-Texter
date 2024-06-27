const path = require("path");

// Route definition to serve index.html from the client/dist directory
module.exports = (app) =>
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
  );
