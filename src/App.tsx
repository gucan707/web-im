import { useState } from "react";
import "./App.scss";

import Input from "./components/Input";
import AddImg from "./components/AddImg";
import AvatarContainer from "./components/AvatarContainer";
import ChatMessage from "./components/ChatMessage";

import photo from "./assets/img/photo.jpeg";

function App() {
  const [value, setValue] = useState("");
  console.log(value);
  const userInfo = {
    avatar: photo,
    name: "test中文",
  };

  return (
    <div className="App">
      <Input
        value={value}
        setValue={setValue}
        front={<AddImg />}
        end={<AddImg />}
      />
      <ChatMessage
        isMine={false}
        // TODO ?我不理解.jpg
        userInfo={userInfo}
        messageInfo={{
          time: Date.now(),
          message: "哈哈哈哈哈哈\n\n哈哈哈哈哈哈哈哈哈哈哈",
        }}
      />
      <ChatMessage
        isMine={true}
        // TODO ?我不理解.jpg
        userInfo={userInfo}
        messageInfo={{
          time: Date.now(),
          message: "哈哈哈哈哈哈\n\n哈哈哈哈哈哈哈哈哈哈哈",
        }}
      />
    </div>
  );
}

export default App;
