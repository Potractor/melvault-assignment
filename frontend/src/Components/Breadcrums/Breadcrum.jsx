import React from "react";
import "./Breadcrum.css";

const Breadcrum = (product) => {
  return (
    <div className="breadcrum">
      HOME {product.category} {product.name}
    </div>
  );
};

export default Breadcrum;
