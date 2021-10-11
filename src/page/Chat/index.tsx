import { useState, useEffect } from "react";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import ChatMessage from "../../components/ChatMessage";

// import { socket } from "../../network/socket";

import photo from "../../assets/img/photo.jpeg";

import "./index.scss";

export default function Chat() {
  const [value, setValue] = useState("");

  return (
    <div className="chat_page">
      <Aside />
      <div className="chat_page-content">
        <div className="chat_page-content-message">
          <ChatMessage
            isMine={false}
            userInfo={{ avatar: photo, name: "test" }}
            messageInfo={{ message: "hhhhhhh", time: Date.now() }}
          />
          <ChatMessage
            isMine={true}
            userInfo={{ avatar: photo, name: "test" }}
            messageInfo={{ message: "hhhhhhh", time: Date.now() }}
          />
          <ChatMessage
            isMine={true}
            userInfo={{ avatar: photo, name: "test" }}
            messageInfo={{ message: "hhhhhhh", time: Date.now() }}
          />
        </div>
        <div className="chat_page-content-input">
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
