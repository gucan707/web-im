import { useState, useRef } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddIcon from "@material-ui/icons/Add";

import AvatarContainer from "../AvatarContainer";
import ContactItem from "../ContactItem";

import photo from "../../assets/img/photo.jpeg";

import "./index.scss";

export default function Aside() {
  const [isFocus, setIsFocus] = useState<boolean | null>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  return (
    <aside className="aside">
      <div className="aside-menu">
        <AvatarContainer imgSrc={photo} badgeInvisible={true} />
        <div className="aside-menu-opts">
          <div className="aside-menu-opts-search">
            <input
              type="text"
              className={
                "aside-menu-opts-search-input" +
                (isFocus === null ? "" : isFocus ? " focus" : " unfocus")
              }
              ref={inputEl}
              onClick={(e) => e.stopPropagation()}
            />
            <SearchOutlinedIcon
              onClick={(e) => {
                e.stopPropagation();
                if (isFocus) return;

                if (inputEl.current) inputEl.current.focus();
                setIsFocus(true);
                document.addEventListener("click", () => setIsFocus(false), {
                  once: true,
                });
              }}
            />
          </div>
          <AddIcon />
        </div>
      </div>
      <div>
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
    </aside>
  );
}
