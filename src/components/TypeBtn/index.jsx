import React from "react";
import { DefaultBtn, ActiveBtn } from "./TypeBtn.styled";

function TypeBtn({ text, isActive }) {
  return <>{!isActive ? <DefaultBtn>{text}</DefaultBtn> : <ActiveBtn>{text}</ActiveBtn>}</>;
}

export default TypeBtn;
