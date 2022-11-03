import React from "react";
import { formatAmout } from "../../utils/formatAmount";
import DetailInfo from "../common/DetailInfo";
import SubHeader from "../common/SubHeader";

const CarAdditionalProducts = ({ additionalProducts }) => {
  return (
    <div>
      <SubHeader title="추가상품" />
      <div>
        {additionalProducts &&
          additionalProducts.map((element) => {
            const { name, amount } = element;
            return (
              <DetailInfo key={name} name={name} description={`월 ${formatAmout(amount)} 원`} />
            );
          })}
      </div>
    </div>
  );
};

export default CarAdditionalProducts;
