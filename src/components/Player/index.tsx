import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:4000/messages");

const Player = () => {
  const [room, setRoom] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  useEffect(() => {
    console.log("Player Id", socket.id);
    socket.on("dm message recieved", () => {
      console.log("dm message recieved");
    });
  }, []);

  const sendMessage = () => {
    socket.emit("player message", { room: currentRoom });
  };

  const joinRoom = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCurrentRoom(room);
    socket.emit("join room", room);
  };

  return (
    <>
      <h1>PLAYER VIEW</h1>
      <button onClick={sendMessage}>Send Player Message</button>
      <input value={room} onChange={e => setRoom(e.target.value)} placeholder="copy dm id" />
      <button onClick={joinRoom}>Join Room</button>
    </>
  );
};

export default Player;
