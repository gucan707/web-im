import './index.scss';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ListOutlinedIcon from '@material-ui/icons/ListOutlined';

import noticeIcon from '../../assets/img/notice.png';
import photo from '../../assets/img/photo.jpeg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ChatRoomDef } from '../../models/chatRoom';
import AvatarContainer from '../AvatarContainer';

type ContactItemChatProps = {
  type: "chat";
  unread: number;
  isSelected: boolean;
  roomInfo: Pick<
    ChatRoomDef,
    "_id" | "isGroup" | "avatar" | "name" | "members"
  >;
};

type ContactItemApplyProps = {
  type: "applyForFriend" | "applyForGroup";
  unread: number;
  isSelected?: undefined;
};

export default function ContactItem(
  props: ContactItemChatProps | ContactItemApplyProps
) {
  const { type, unread, isSelected } = props;
  const history = useHistory();
  const myId = useAppSelector((state) => state.userInfoReducer.user._id);

  const getName = () => {
    switch (props.type) {
      case "chat": {
        if (props.roomInfo.isGroup) return props.roomInfo.name;
        return [...props.roomInfo.members].filter(
          (member) => member._id !== myId
        )[0].nickname;
      }
      case "applyForFriend":
        return "好友申请";
      case "applyForGroup":
        return "群消息";

      default:
        break;
    }
  };

  return (
    <div
      className={"contact_item" + (isSelected ? " selected" : "")}
      onClick={() =>
        history.push(`/${props.type === "chat" ? props.roomInfo._id : type}`)
      }
    >
      <AvatarContainer
        imgSrc={props.type === "chat" ? props.roomInfo.avatar : noticeIcon}
        badgeInvisible={false}
        avartarSx={{ width: 29, height: 29 }}
      />
      <div className="contact_item-info">
        <div className="contact_item-info-name">{getName()}</div>
        <div className="contact_item-info-right">
          <div className="contact_item-info-unread">{unread}</div>
          <ListOutlinedIcon className="contact_item-info-opts" />
        </div>
      </div>
    </div>
  );
}
