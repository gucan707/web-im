import { useState } from "react";
import "./App.scss";

import Input from "./components/Input";
import AddImg from "./components/AddImg";
import AvatarContainer from "./components/AvatarContainer";

import photo from "./assets/img/photo.jpeg";

function App() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="App">
      <Input
        value={value}
        setValue={setValue}
        front={<AddImg />}
        end={<AddImg />}
      />
      <AvatarContainer imgSrc={photo} badgeInvisible={false} />
    </div>
  );
}

export default App;
