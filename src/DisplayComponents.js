import React, { Component } from "react";
import Button from "./Button";

const DisplayComponents = () => {
  const onClickPrimary = () => {
    console.log(" click primary button");
  };

  const onClickSecondary = () => {
    console.log("click secondary button");
  };

  return (
    <div className="App">
      <Button className="btn-primary" onClick={onClickPrimary}>
        Primary button
      </Button>
      <Button className="btn-secondary" onClick={onClickSecondary}>
        Secondary button
      </Button>
    </div>
  );
};

export default DisplayComponents;
