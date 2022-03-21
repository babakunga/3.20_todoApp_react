import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんちわ！</h1>
      <ColorfulMessage color="blue" message="元気ー？" />
      <ColorfulMessage color="pink" message="元気よ？" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
