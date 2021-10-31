import './index.scss';

import { useState } from 'react';

import GChat from '../../assets/img/GChat.png';
import photo from '../../assets/img/photo.jpeg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectMemberById } from '../../utils/selectMemberById';
import ChatMessage from '../ChatMessage';
import Input from '../Input';
import useSetup from './hooks/useSetup';

export type ChatContentProps = {
  roomId: string;
};

export default function ChatContent(props: ChatContentProps) {
  const [value, setValue] = useState("");
  const myId = useAppSelector((state) => state.userInfoReducer.user._id);
  const { chatDetail } = useSetup(props);

  return (
    <div className="chat_content">
      {props.roomId ? (
        <>
          <div className="chat_content-message">
            {chatDetail &&
              chatDetail.messages &&
              chatDetail.messages.map((message) => (
                <ChatMessage
                  isMine={message.sender === myId}
                  userInfo={{
                    avatar: selectMemberById(chatDetail, message.sender).avatar,
                    name: selectMemberById(chatDetail, message.sender).nickname,
                  }}
                  messageInfo={{ message: message.content, time: message.time }}
                />
              ))}
          </div>
          <div className="chat_content-input">
            <Input value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
        </>
      ) : (
        <div className="chat_content-default">
          <h1>欢迎来到GChat</h1>
          <div>和好友聊聊天吧！</div>
          <img src={GChat} alt="" className="chat_content-default-background" />
        </div>
      )}
    </div>
  );
}
