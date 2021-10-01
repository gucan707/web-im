import { useState } from "react";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";

import AvatarContainer from "../AvatarContainer";

import photo from "../../assets/img/photo.jpeg";

import "./index.scss";

export default function ContactItem() {
  return (
    <div className="contact_item">
      <AvatarContainer imgSrc={photo} badgeInvisible={false} />
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
