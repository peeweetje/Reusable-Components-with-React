import React from "react";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import ReusableInput from "./ReusableInput";
import Breadcrumb from "../src/breadcrumb/BreadCrumb";

const items = [
  { name: "Home" },
  { name: "teacher" },
  { name: "student" },
  { name: "lesson" },
  { name: "practice" }
];

const DisplayComponents = () => {
  const onClickPrimary = () => {
    console.log(" click primary button");
  };

  const onClickSecondary = () => {
    console.log("click secondary button");
  };

  const handleChange = e => {
    this.onChange && this.onChange(e.target.value);
  };

  return (
    <div className="App">
      <Button className="btn-primary" onClick={onClickPrimary}>
        Primary button
      </Button>
      <Button className="btn-secondary" onClick={onClickSecondary}>
        Secondary button
      </Button>
      <DropdownMenu
        items={[
          { value: "ReactJS", id: 1 },
          { value: "VueJS", id: 2 },
          { value: "Coding", id: 3 },
          { value: "Developer", id: 4 }
        ]}
      />
      <ReusableInput className="input" onChange={handleChange} />
      <Breadcrumb>
        {items.map(({ name }) => (
          <div key={name}>{name}</div>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default DisplayComponents;
