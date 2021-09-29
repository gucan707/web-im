import { useState } from "react";

import AvatarContainer from "../AvatarContainer";
import { formatDate } from "../../utils/formatDate";

import photo from "../../assets/img/photo.jpeg";

import "./index.scss";

export interface ChatMessageProps {
  isMine: boolean;
  userInfo: {
    avatar: string;
    name: string;
  };
  messageInfo: {
    time: number;
    message: string;
  };
}

export default function ChatMessage(props: ChatMessageProps) {
  const { isMine, userInfo, messageInfo } = props;
  return (
    <div className={"chat_message" + (isMine ? " mine" : "")}>
      <AvatarContainer imgSrc={userInfo.avatar} badgeInvisible={true} />
      <div className="chat_message-detail">
        <div className="chat_message-detail-info">
          <div className="chat_message-detail-info-name">{userInfo.name}</div>
          <div>{formatDate(new Date(messageInfo.time))}</div>
        </div>
        <pre className="chat_message-detail-text">{messageInfo.message}</pre>
      </div>
    </div>
  );
}
