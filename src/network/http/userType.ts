import { BaseInfo } from '../../models/user';

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

export type ReqBaseInfo = Pick<BaseInfo, "nickname" | "avatar">;

export type ReqPwInfo = {
  password: string;
  newPassword: string;
};

export type ReqSearchUser = {
  page: number;
  name: string;
};

export type ReqApplyForFriend = {
  confirm: boolean;
  applicantId: string; // 申请人id
};

export type ResToken = {
  _id: string;
  token: string;
};

export type ResUserBaseInfo = BaseInfo;

export type ResSearchUser = ResUserBaseInfo[];

export type ResFriendsList = ResUserBaseInfo[];

export enum ApplyState {
  pending = "尚未解决",
  resolve = "已同意",
  reject = "已拒绝",
}

export type ResApplyForFriend = {
  _id: string;
  user: BaseInfo;
  state: ApplyState;
}[];
