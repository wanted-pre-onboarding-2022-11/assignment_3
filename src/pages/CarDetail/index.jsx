import React from "react";
import Header from "@/components/Header/index";

function CarDetail() {
  // const { id } = useParams();
  // const { carList } = useContext(CarListContext);
  // const [carDetail] = carList.filter((item) => item.id === +id);
  return (
    <div>
      <Header title="차량상세" isBackBtn={true} />
    </div>
  );
}

export default CarDetail;
