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
  _id: string;
};

export type ReqBaseInfo = {
  nickname: string;
  avatar: string;
};

export type ReqPwInfo = {
  password: string;
  newPassword: string;
};

export type ResToken = {
  _id: string;
  token: string;
};

export type ResUserBaseInfo = {
  _id: string;
  username: string;
  nickname: string;
  avatar: string;
};

export type ResFriendsList = ResUserBaseInfo[];
