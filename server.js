const express = require("express");
const app = express();
const http = require("http").createServer(app);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
