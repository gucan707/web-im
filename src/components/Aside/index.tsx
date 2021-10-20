import './index.scss';

import addIcon from '../../assets/img/add.png';
import friendsIcon from '../../assets/img/friends.png';
import logoutIcon from '../../assets/img/logout.png';
import messageIcon from '../../assets/img/message.png';
import momentsIcon from '../../assets/img/moments.png';
import photo from '../../assets/img/photo.jpeg';
import searchIcon from '../../assets/img/search.png';
import AvatarContainer from '../AvatarContainer';
import ContactItem from '../ContactItem';
import DialogLogout from './components/DialogLogout';
import DialogUpdateInfo from './components/DialogUpdateInfo';
import useSetup from './hooks/useSetup';
import { Dialog } from './hooks/useShowDialog';

export default function Aside() {
  const { userInfo, dialog, setDialog, hideDialog } = useSetup();

  return (
    <aside className="aside">
      <div className="aside-opts">
        <div className="aside-opts-avatar">
          <AvatarContainer imgSrc={photo} badgeInvisible={false} />
          <div className={"aside-opts-avatar-popover"}>
            <div
              className="aside-opts-avatar-popover-item"
              onClick={() => setDialog(Dialog.updateInfo)}
            >
              修改信息
            </div>
            <div
              className="aside-opts-avatar-popover-item"
              onClick={() => setDialog(Dialog.logout)}
            >
              退出登录
            </div>
          </div>
        </div>
        <img src={messageIcon} alt="message" className="aside-opts-btn" />
        <img src={friendsIcon} alt="friends" className="aside-opts-btn" />
        <img src={momentsIcon} alt="moments" className="aside-opts-btn" />
        <img src={logoutIcon} alt="logout" className="aside-opts-btn" />
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
          <div className={"aside-content-opts-popover"}>
            <div className="aside-content-opts-popover-item">添加好友/群组</div>
            <div className="aside-content-opts-popover-item">创建群组</div>
          </div>
        </div>
        <div>
          <ContactItem />
          <ContactItem />
          <ContactItem />
        </div>
      </div>
      {dialog === Dialog.updateInfo && (
        <DialogUpdateInfo hideDialog={hideDialog} />
      )}
      {dialog === Dialog.logout && <DialogLogout hideDialog={hideDialog} />}
    </aside>
  );
}
