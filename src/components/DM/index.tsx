import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:4000/messages");

const DM = () => {
    useEffect(() => {
        console.log("DM Id: ", socket.id);
    socket.on("player joined", () => {
      console.log("a new player joined");
    });
    socket.on("player message recieved", () => {
      console.log("player message recieved");
    });
  }, []);

  const sendDMMessage = () => {
    socket.emit("dm message");
  };
  return (
    <>
      <h1>DM VIEW</h1>
      <button onClick={sendDMMessage}>Send Dm Message</button>
    </>
  );
};

export default DM;
