import './index.scss';

import { useState } from 'react';

import photo from '../../assets/img/photo.jpeg';
import ChatMessage from '../ChatMessage';
import Input from '../Input';

export default function ChatContent() {
  const [value, setValue] = useState("");

  return (
    <div className="chat_content">
      <div className="chat_content-message">
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
      <div className="chat_content-input">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  );
}
