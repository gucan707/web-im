import { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";

import FormLogin from "../../components/FormLogin";
import FormRegister from "../../components/FormRegister";

import GChat from "../../assets/img/GChat.png";

import "./index.scss";

export default function Login() {
  // 当前tab索引
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="login_page">
      <h1>
        welcome to{" "}
        <span className="login_page-GC">
          GC
          <img src={GChat} alt="" className="login_page-GC-hat" />
        </span>
        hat
      </h1>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="登录" className="login_page-tab" />
        <Tab label="注册" className="login_page-tab" />
      </Tabs>
      {value ? <FormRegister /> : <FormLogin />}
    </div>
  );
}
