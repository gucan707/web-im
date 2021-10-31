import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/useAppSelector';
import useChatRoom from './useChatRoom';
import useFriends from './useFriends';
import useShowDialog from './useShowDialog';
import useShowPopover from './useShowPopover';

export default function useSetup() {
  const userInfo = useAppSelector((state) => state.userInfoReducer);
  const { dialog, setDialog, hideDialog } = useShowDialog();
  const { popover, setPopover } = useShowPopover();
  const { friends, onAddFriend, onDelFriend, onGetFriendsList } = useFriends();
  const { chatRoom, selectChatRoom } = useChatRoom();

  return {
    userInfo,
    dialog,
    setDialog,
    hideDialog,
    popover,
    setPopover,
    friends,
    onAddFriend,
    onDelFriend,
    onGetFriendsList,
    chatRoom,
    selectChatRoom,
  };
}
