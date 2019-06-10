import React from "react";
import Button from "./Button";

const DisplayComponents = () => {
  const onClick = () => {
    console.log(" click primary button");
  };

  return (
    <div className="App">
      <Button className="btn-primary" onClick={onClick}>
        Click Me
      </Button>
    </div>
  );
};

export default DisplayComponents;
