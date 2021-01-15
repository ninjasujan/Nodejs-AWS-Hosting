const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Server running" });
});

app.listen(PORT);
