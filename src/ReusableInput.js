import React from "react";

const ReusableInput = ({ className, value, handleChange }) => {
  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default ReusableInput;
