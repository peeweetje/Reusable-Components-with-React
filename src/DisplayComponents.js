import React from "react";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";

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
      <DropdownMenu
        name="[country_id]"
        items={[
          { value: "ReactJS", id: 1 },
          { value: "VueJS", id: 2 },
          { value: "Coding", id: 3 },
          { value: "Developer", id: 4 }
        ]}
      />
    </div>
  );
};

export default DisplayComponents;
