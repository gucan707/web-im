import _request from './_request';
import {
    ReqApplyForFriend, ReqBaseInfo, ReqCreateUser, ReqId, ReqLoginInfo, ReqPwInfo, ReqSearchUser,
    ResApplyForFriend, ResFriendsList, ResSearchUser, ResToken, ResUserBaseInfo
} from './userType';

export const createUser = async (userBaseInfo: ReqCreateUser) =>
  await _request<ResToken>({
    method: "POST",
    url: "/user",
    data: userBaseInfo,
  });

export const login = async (loginInfo: ReqLoginInfo) =>
  await _request<ResToken>({
    method: "POST",
    url: "/user/login",
    data: loginInfo,
  });

export const getUserInfoById = async (idObj: ReqId) =>
  await _request<ResUserBaseInfo>({
    method: "GET",
    url: `/user/${idObj._id}`,
  });

export const updateUserInfo = async (baseInfo: ReqBaseInfo) =>
  await _request({
    method: "PUT",
    url: "/user",
    data: baseInfo,
  });

export const updatePw = async (pwInfo: ReqPwInfo) =>
  await _request({
    method: "PUT",
    url: "/user/password",
    data: pwInfo,
  });

export const getFriendsList = async () =>
  await _request<ResFriendsList>({
    method: "GET",
    url: "/user/friend",
  });

export const searchUser = async (search: ReqSearchUser) =>
  await _request<ResSearchUser>({
    method: "GET",
    url: "/user/search",
    params: search,
  });

export const addFriend = async (idObj: ReqId) =>
  await _request<string | undefined>({
    method: "POST",
    url: "/user/friend",
    data: idObj,
  });

export const delFriend = async (idObj: ReqId) =>
  await _request({
    method: "DELETE",
    url: `/user/friend/${idObj._id}`,
  });

export const getApplyForFriend = async () =>
  await _request<ResApplyForFriend>({
    method: "GET",
    url: "/user/applyForFriend",
  });

export const confirmApplyForFriend = async (reply: ReqApplyForFriend) =>
  await _request({
    method: "POST",
    url: "/user/applyForFriend",
    data: reply,
  });
