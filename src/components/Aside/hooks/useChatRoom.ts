import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ChatRoomDef } from '../../../models/chatRoom';
import { getAllChatRoom } from '../../../network/http/chatRoom';

export default function useChatRoom() {
  const [chatRoom, setChatRoom] = useState<ChatRoomDef[]>([]);
  const [selectChatRoom, setSelectChatRoom] = useState("");
  const { pathname } = useLocation();
  const history = useHistory();

  const onGetAllChatRoom = async () => {
    const chatRoom = (await getAllChatRoom()) || [];
    setChatRoom(chatRoom);
  };

  useEffect(() => {
    onGetAllChatRoom();
  }, []);

  useEffect(() => {
    if (chatRoom && chatRoom.length) {
      setSelectChatRoom(chatRoom[0]._id);
      history.push(`/${chatRoom[0]._id}`);
    }
  }, [chatRoom]);

  useEffect(() => {
    if (pathname) setSelectChatRoom(pathname.slice(1));
  }, [pathname]);

  return { chatRoom, selectChatRoom };
}
