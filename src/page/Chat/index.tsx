import { useState } from "react";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import ChatMessage from "../../components/ChatMessage";

import photo from "../../assets/img/photo.jpeg";

import "./index.scss";

export default function Chat() {
  const [value, setValue] = useState("");
  return (
    <div className="chat-page">
      <Aside />
      <div className="chat-page_content">
        <div>
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
        </div>
        <Input value={value} setValue={setValue} />
      </div>
    </div>
  );
}
