import React from "react";
import TypeBtn from "@/components/TypeBtn/index";
import { Container } from "./TypeBtn.styled";

function TypeBtnList() {
  return (
    <Container>
      <TypeBtn text="전체" isActive={true} />
      <TypeBtn text="대형" isActive={false} />
      <TypeBtn text="중형" isActive={false} />
      <TypeBtn text="소형" isActive={false} />
    </Container>
  );
}

export default TypeBtnList;
