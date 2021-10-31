import { BaseInfo } from './user';

export type ChatRoomDef = {
  _id: string;
  number: string;
  name: string;
  avatar: string;
  isGroup: boolean;
  dismissed: boolean;
  isHidden: boolean;
  members: BaseInfo[];
  admin: string;
  messages: {
    _id: string;
    content: string;
    sender: string;
    time: number;
    replyTo: string | null;
  }[];
};

export const initialChatRoom: ChatRoomDef = {
  _id: "",
  number: "",
  name: "",
  avatar: "",
  isGroup: false,
  dismissed: false,
  isHidden: false,
  members: [],
  admin: "",
  messages: [],
};
