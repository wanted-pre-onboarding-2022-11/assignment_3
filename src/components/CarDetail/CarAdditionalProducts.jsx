import React from "react";

const CarAdditionalProducts = ({ additionalProducts }) => {
  return (
    <div>
      <h3>추가상품</h3>
      <div>
        {additionalProducts &&
          additionalProducts.map((element) => {
            const { name, amount } = element;
            return (
              <span key={name}>
                <strong>{name}</strong>
                <strong>{amount}</strong>
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default CarAdditionalProducts;
