import { ChatRoomDef } from '../models/chatRoom';

export const selectMemberById = (chatDetail: ChatRoomDef, _id: string) =>
  chatDetail.members.filter((member) => member._id === _id)[0];
