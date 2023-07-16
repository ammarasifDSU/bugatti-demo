import { useState } from "react";
import "./App.css";
import Display from "./Components/display";
import Header from "./Components/header";
import EndCover from "./Components/endCover";

function App() {
  const [isMenu, setIsMenu] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="App">
      {!isEnd ? (
        <>
          <Header setIsMenu={setIsMenu} />
          <Display isMenu={isMenu} setIsEnd={setIsEnd} />
        </>
      ) : (
        <EndCover />
      )}
    </div>
  );
}

export default App;
