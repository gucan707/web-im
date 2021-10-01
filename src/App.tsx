import { useState } from "react";
import "./App.scss";

import Input from "./components/Input";
import AddImg from "./components/AddImg";
import AvatarContainer from "./components/AvatarContainer";
import ChatMessage from "./components/ChatMessage";
import ContactItem from "./components/ContactItem";
import Aside from "./components/Aside";

import Chat from "./page/Chat";

import photo from "./assets/img/photo.jpeg";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
