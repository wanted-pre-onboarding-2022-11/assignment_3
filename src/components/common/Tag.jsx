import React from "react";
import Button from "./Button";

const Tag = ({ label, isActive, onClick }) => {
  return (
    <li>
      <Button label={label} color={isActive ? "primary" : "secondary"} onClick={onClick} />
    </li>
  );
};

export default Tag;
