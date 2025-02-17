const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Fallback to serve index.html for any unknown paths (for client-side routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start listening on the specified port
app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});
