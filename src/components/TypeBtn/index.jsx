import React from "react";
import { DefaultBtn, ActiveBtn } from "./TypeBtn.styled";

function TypeBtn({ text, isActive, handleCar }) {
  return (
    <div onClick={() => handleCar(text)}>
      {!isActive ? <DefaultBtn>{text}</DefaultBtn> : <ActiveBtn>{text}</ActiveBtn>}
    </div>
  );
}

export default TypeBtn;
