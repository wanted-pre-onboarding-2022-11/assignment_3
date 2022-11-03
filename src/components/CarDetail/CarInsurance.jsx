import React from "react";

const CarInsurance = ({ insurance }) => {
  return (
    <div>
      <h3>보험</h3>
      <div>
        {insurance &&
          insurance.map((element) => {
            const { name, description } = element;
            return (
              <span key={name}>
                <strong>{name}</strong>
                <strong>{description}</strong>
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default CarInsurance;
