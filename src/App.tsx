import { useState } from "react";
import "./App.scss";

import Input from "./components/Input";
import AddImg from "./components/AddImg";

function App() {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="App">
      <Input value={value} setValue={setValue} />
      <AddImg />
    </div>
  );
}

export default App;
