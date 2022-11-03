import React from "react";
import styled from "styled-components";
import CarList from "../components/CarList";
import Header from "../components/Header";
import TagList from "../components/TagList";

const Home = () => {
  return (
    <>
      <Header title="전체차량" />
      <TagList />
      <Main>
        <CarList />
      </Main>
    </>
  );
};

export default Home;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
