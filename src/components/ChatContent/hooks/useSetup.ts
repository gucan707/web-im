import { useEffect } from 'react';

import { ChatContentProps } from '../';
import { socketJoinRoom } from '../../../network/socket';
import useChatDetail from './useChatDetail';

export default function useSetup(params: ChatContentProps) {
  const { roomId } = params;
  const { chatDetail } = useChatDetail(roomId);

  useEffect(() => {
    if (roomId) socketJoinRoom(roomId);
  }, [roomId]);

  return { chatDetail };
}
