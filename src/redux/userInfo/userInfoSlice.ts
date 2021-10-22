import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ResUserBaseInfo } from '../../network/http/userType';

// 定义 state 对应类型的初始值
const initialState = {
  user: {
    _id: "",
    avatar: "",
    nickname: "",
    username: "",
  },
};

export const userInfoSlice = createSlice({
  name: "userInfoReducer",
  // createSlice 将会根据 initialState 参数推断 state 的类型
  initialState,
  reducers: {
    // 使用 PayloadAction 类型来声明 action.payload 的内容
    changeUserInfo: (
      state,
      // 用 ConstructorParameters 获取 ToastType 类的第一个参数类型传给 PayloadAction
      action: PayloadAction<Partial<ResUserBaseInfo>>
    ) => {
      console.log("action", { ...action.payload });

      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const { changeUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
