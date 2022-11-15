import React from "react";
import "./style.css";
import Button from "./Button";

function App() {
  return (
    <div>
      <h1 style={{ textAling: "center" }}>Hellow World</h1>;
      <Button title="App store" />
      <Button title="Play store" />
      <Button />
      {/* <button className="button">clickk</button> */}
    </div>
  );
}

export default App;
