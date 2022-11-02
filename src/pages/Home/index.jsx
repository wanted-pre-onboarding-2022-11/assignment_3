import React, { useContext } from "react";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { CarDataListContext } from "../../contexts/CarDataListContext";

const Home = () => {
  const { carDataList, isLoading } = useContext(CarDataListContext);
  const navigate = useNavigate();
  const handleTargetPage = (target) => {
    navigate(`/detail/${target}`);
  };

  if (isLoading) return <div>로딩중...</div>;

  return (
    <div>
      {carDataList.map((e) => (
        <div key={e.id}>
          <button onClick={() => handleTargetPage(e.id)}>{e.attribute.name}</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
