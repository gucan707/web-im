import { useState, useRef } from "react";

import AvatarContainer from "../AvatarContainer";
import ContactItem from "../ContactItem";

import photo from "../../assets/img/photo.jpeg";
import messageIcon from "../../assets/img/message.png";
import friendsIcon from "../../assets/img/friends.png";
import momentsIcon from "../../assets/img/moments.png";
import searchIcon from "../../assets/img/search.png";
import addIcon from "../../assets/img/add.png";

import "./index.scss";

export default function Aside() {
  return (
    <aside className="aside">
      <div className="aside-opts">
        <div className="aside-opts-avatar">
          <AvatarContainer imgSrc={photo} badgeInvisible={false} />
        </div>
        <img src={messageIcon} alt="message" className="aside-opts-btn" />
        <img src={friendsIcon} alt="friends" className="aside-opts-btn" />
        <img src={momentsIcon} alt="moments" className="aside-opts-btn" />
      </div>
      <div className="aside-content">
        <div className="aside-content-opts">
          <div className="aside-content-opts-input">
            <input type="text" placeholder="search" />
            <img
              src={searchIcon}
              alt="search"
              className="aside-content-opts-input-icon"
            />
          </div>
          <img src={addIcon} alt="add" className="aside-content-opts-add" />
        </div>
        <div>
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </div>
      </div>
    </aside>
  );
}
