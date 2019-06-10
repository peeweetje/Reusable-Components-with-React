import React from "react";

const Button = ({ className, onClickButton, children }) => {
  onClickButton = () => {
    alert("button was clicked");
  };
  return (
    <button className={className} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
