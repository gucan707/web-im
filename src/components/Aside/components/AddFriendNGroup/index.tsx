import './index.scss';

import { Button } from '@material-ui/core';

import addCrossIcon from '../../../../assets/img/add-cross.png';
import checkedIcon from '../../../../assets/img/checked.png';
import photo from '../../../../assets/img/photo.jpeg';
import searchIcon from '../../../../assets/img/search.png';
import AvatarContainer from '../../../AvatarContainer';
import Input from '../../../Input';
import { DialogAddRelationProps } from '../DialogAddRelation';
import useSetup from './hooks/useSetup';

export default function AddFriendNGroup({
  hideDialog,
  onAddFriend,
  friends,
}: Pick<DialogAddRelationProps, "hideDialog" | "onAddFriend" | "friends">) {
  console.log({ friends });

  const { changeSearchValue, search, searchValue, searchUsers } = useSetup();

  const SearchIcon = (
    <img src={searchIcon} alt="search" className="search" onClick={search} />
  );

  return (
    <div className="add_friendNgroup">
      <Input
        value={searchValue}
        onChange={changeSearchValue}
        multiline={false}
        end={SearchIcon}
      />
      <div className="add_friendNgroup-lists">
        {searchUsers.length ? (
          searchUsers.map((user, i) => (
            <div className="add_friendNgroup-lists-item" key={user._id}>
              <AvatarContainer imgSrc={photo} badgeInvisible={false} />
              <div className="add_friendNgroup-lists-item-nickname">
                {user.nickname}
              </div>
              <div className="add_friendNgroup-lists-item-username">
                {user.username}
              </div>
              <div className="spacer"></div>
              {friends.some((friend) => friend._id === user._id) ? (
                <img
                  src={checkedIcon}
                  alt="added"
                  className="add_friendNgroup-lists-item-added"
                />
              ) : (
                <img
                  src={addCrossIcon}
                  alt="add"
                  className="add_friendNgroup-lists-item-add"
                  onClick={() => onAddFriend({ _id: user._id })}
                />
              )}
            </div>
          ))
        ) : (
          <div>什么都没有呢</div>
        )}
      </div>
      <Button
        variant="outlined"
        className="change_info-btn"
        onClick={() => {
          hideDialog();
        }}
      >
        取消
      </Button>
    </div>
  );
}
