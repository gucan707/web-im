import { useState, useMemo } from "react";
import { Button } from "@material-ui/core";
import useDebounce from "../../utils/debounce";
import Input from "../Input";

import "./index.scss";

const initialState = {
  username: "",
  nickname: "",
  password: "",
};

export default function FormRegister() {
  const [form, setForm] = useState(initialState);
  const [allowed, setAllowed] = useState([false, false, false]);

  const checkAllowed = (form: {
    username: string;
    password: string;
    nickname: string;
  }) => {
    const { nickname, password, username } = form;

    const newAllowed: boolean[] = [];
    newAllowed[0] =
      /^[_a-zA-Z0-9]+$/.test(username) &&
      username.length >= 3 &&
      username.length <= 10;

    newAllowed[1] = nickname.length >= 3 && nickname.length <= 10;

    newAllowed[2] =
      /^[_a-zA-Z0-9]+$/.test(password) &&
      password.length >= 8 &&
      password.length <= 15;

    setAllowed(newAllowed);
  };

  return (
    <div className="form_register">
      <div
        className={"form_register-input" + (allowed[0] ? "" : " error")}
        data-warning="用户名需在3~10字之间，仅能包含数字、大小写字母与下划线（_）"
      >
        <div className="form_register-input-key">用户名</div>
        <Input
          value={form.username}
          onChange={(e) => {
            const newForm = {
              username: e.target.value,
              password: form.password,
              nickname: form.nickname,
            };
            setForm(newForm);
            checkAllowed(newForm);
          }}
          multiline={false}
        />
      </div>
      <div
        className={"form_register-input" + (allowed[1] ? "" : " error")}
        data-warning="昵称需在3~10字之间"
      >
        <div className="form_register-input-key">昵称</div>
        <Input
          value={form.nickname}
          onChange={(e) => {
            const newForm = {
              nickname: e.target.value,
              password: form.password,
              username: form.username,
            };
            setForm(newForm);
            checkAllowed(newForm);
          }}
          multiline={false}
        />
      </div>
      <div
        className={"form_register-input" + (allowed[2] ? "" : " error")}
        data-warning="密码需在8~15字之间，仅能包含数字、大小写字母与下划线（_）"
      >
        <div className="form_register-input-key">密码</div>
        <Input
          value={form.password}
          onChange={(e) => {
            const newForm = {
              password: e.target.value,
              username: form.username,
              nickname: form.nickname,
            };
            setForm(newForm);
            checkAllowed(newForm);
          }}
          multiline={false}
          type="password"
        />
      </div>
      <Button
        variant="outlined"
        className="form_register-btn"
        onClick={() => console.log(form)}
      >
        注册
      </Button>
    </div>
  );
}
