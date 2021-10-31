import { ChatRoomDef } from '../../models/chatRoom';
import _request from './_request';
import { AllChatRoom, ChatRoomId } from './chatRoomType';

export const getAllChatRoom = async () =>
  await _request<AllChatRoom>({
    method: "GET",
    url: "/chat",
  });

export const getChatRoomDetail = async ({ _id }: ChatRoomId) =>
  await _request<ChatRoomDef>({
    method: "GET",
    url: `/chat/${_id}`,
  });
