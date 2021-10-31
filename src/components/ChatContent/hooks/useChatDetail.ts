import { useEffect, useState } from 'react';

import { ChatRoomDef, initialChatRoom } from '../../../models/chatRoom';
import { getChatRoomDetail } from '../../../network/http/chatRoom';

export default function useChatDetail(roomId: string) {
  const [chatDetail, setChatDetail] = useState<ChatRoomDef>();

  const getChatDetail = async () => {
    const chatDetail =
      (await getChatRoomDetail({ _id: roomId })) || initialChatRoom;
    console.log({ chatDetail, roomId });

    setChatDetail(chatDetail);
  };

  useEffect(() => {
    console.log("get!");

    getChatDetail();
  }, [roomId]);

  return { chatDetail };
}
