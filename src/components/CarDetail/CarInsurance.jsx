import React from "react";
import DetailInfo from "../common/DetailInfo";
import SubHeader from "../common/SubHeader";

const CarInsurance = ({ insurance }) => {
  return (
    <div>
      <SubHeader title="보험" />
      <div>
        {insurance &&
          insurance.map((element) => {
            const { name, description } = element;
            return <DetailInfo key={name} name={name} description={description} />;
          })}
      </div>
    </div>
  );
};

export default CarInsurance;
