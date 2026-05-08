import React, { useState } from "react";

const App = () => {
  const [mode, changeMode] = useState("white");

  function modeChanger() {
    changeMode(mode === "white" ? "black" : "white");
  }

  return (

    <div
      id="parent"
      style={{
        backgroundColor : mode,
        color : mode == 'black' ? 'white' : 'black',
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.4s ease",
      }}
    >
      <h1>Color Mode Changer</h1>
      <button onClick={modeChanger}>Toggle Mode</button>
    </div>
  );
};

export default App;