const express = require("express");
const app = express();
const http = require("http").createServer(app);

const PORT = process.env.PORT || 4000;

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/**
 * todo : socket io functionality
 */

const io = require("socket.io")(http);
io.on("connection", (Socket) => {
  Socket.on("message", (clientmsg) => {
    Socket.broadcast.emit("message", appendMessge);
  });
});
