import './index.scss';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ListOutlinedIcon from '@material-ui/icons/ListOutlined';

import noticeIcon from '../../assets/img/notice.png';
import photo from '../../assets/img/photo.jpeg';
import AvatarContainer from '../AvatarContainer';

type ContactItemProps = {
  type?: "chat" | "applyForFriend" | "applyForGroup";
};

export default function ContactItem(props: ContactItemProps) {
  const { type = "chat" } = props;
  const history = useHistory();

  return (
    <div
      className="contact_item"
      onClick={() => {
        if (type === "chat") return;
        history.push(`/${type}`);
      }}
    >
      <AvatarContainer
        imgSrc={type === "chat" ? photo : noticeIcon}
        badgeInvisible={false}
        avartarSx={{ width: 29, height: 29 }}
      />
      <div className="contact_item-info">
        <div className="contact_item-info-name">前端组</div>
        <div className="contact_item-info-right">
          <div className="contact_item-info-unread">12</div>
          <ListOutlinedIcon className="contact_item-info-opts" />
        </div>
      </div>
    </div>
  );
}
