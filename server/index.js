const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 4000;

app.get("/", (req, res) => res.send("Hello World!"));

io.of("/messages").on("connection", socket => {
  socket.on("join room", room => {
    console.log("PLAYER JOINING ROOM: ", room);
    socket.join(room, () => {
      socket.broadcast.to(room).emit("player joined");
    });
  });
  // this might work
  socket.on("dm message", () => {
    console.log("DM SENDING MESSAGE");
    socket.in(socket.id).emit("dm message recieved");
  });

  // this probably won't work
  socket.on("player message", ({room}) => {
    console.log("Player Sending MESSAGE");
    socket.in(room).emit("player message recieved");
  });

});

server.listen(port, () => console.log(`Listening on port ${port}`));
