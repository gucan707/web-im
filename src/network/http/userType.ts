export type ReqCreateUser = {
  username: string;
  password: string;
  nickname: string;
};

export type ReqLoginInfo = {
  username: string;
  password: string;
};

export type ReqId = {
  id: string;
};

export type ReqBaseInfo = {
  nickname: string;
  password: string;
  avatar: string;
};

export type ResToken = {
  id: string;
  token: string;
};

export type ResUserBaseInfo = {
  id: string;
  username: string;
  nickname: string;
  avatar: string;
};

export type ResFriendsList = ResUserBaseInfo[];
