import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Button className="btn-primary" onClick="onClickButton">
        Click Me
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
