import React, { useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

const App = () => {

  useEffect(() => {
    const socket = socketIOClient.connect("http://localhost:4000");
    socket.on("player message", function(data: { message: string }) {
      console.log("recieved message:", data.message);
    });
  }, []);
  const sendMessage = () => {
    const socket = socketIOClient.connect("http://localhost:4000");
    socket.emit('dm message', { message: 'an example dm message' });
  };
  return (
    <div data-testid="App" className="App">
      <button onClick={sendMessage} data-testid="SendMessageButton">
      Click me to create a message
      </button>
    </div>
  );
};

export default App;
