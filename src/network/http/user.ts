import _request from './_request';
import {
    ReqBaseInfo, ReqCreateUser, ReqId, ReqLoginInfo, ReqPwInfo, ReqSearchUser, ResFriendsList,
    ResSearchUser, ResToken, ResUserBaseInfo
} from './userType';

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

export const createUser = async (userBaseInfo: ReqCreateUser) =>
  await _request<ResToken>({
    method: POST,
    url: "/user",
    data: userBaseInfo,
  });

export const login = async (loginInfo: ReqLoginInfo) =>
  await _request<ResToken>({
    method: POST,
    url: "/user/login",
    data: loginInfo,
  });

export const getUserInfoById = async (idObj: ReqId) =>
  await _request<ResUserBaseInfo>({
    method: GET,
    url: `/user/${idObj._id}`,
  });

export const updateUserInfo = async (baseInfo: ReqBaseInfo) =>
  await _request({
    method: PUT,
    url: "/user",
    data: baseInfo,
  });

export const updatePw = async (pwInfo: ReqPwInfo) =>
  await _request({
    method: PUT,
    url: "/user/password",
    data: pwInfo,
  });

export const getFriendsList = async () =>
  await _request<ResFriendsList>({
    method: GET,
    url: "/user/friend",
  });

export const searchUser = async (search: ReqSearchUser) =>
  await _request<ResSearchUser>({
    method: GET,
    url: "/user/search",
    params: search,
  });
