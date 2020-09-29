import React, { memo, useState } from 'react';
import StompClient from "react-stomp-client";

function App() {
  const [latestMessage, setMessage] = useState<string>();
  function handleMessage(stompMessage: any) {
    setMessage(stompMessage);
  }

  return (
    <>
      Websocket demo
      <StompClient
        endpoint="wss://javascript.info/article/websocket/demo/hello"
        topic="my-topic"
        onMessage={handleMessage}
      >
        <div>
          {latestMessage
            ? `Latest message received: ${latestMessage}`
            : "No message received yet"}
        </div>
      </StompClient>
    </>
  );
}

export default memo(App);