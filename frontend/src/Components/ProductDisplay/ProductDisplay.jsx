import React from "react";
import "./ProductDisplay.css";
const ProductDisplay = (product) => {
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img className="img1" src={product.product.image} alt="" />
          <img className="img1" src={product.product.image} alt="" />
          <img className="img1" src={product.product.image} alt="" />
          <img className="img1" src={product.product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right"></div>
    </div>
  );
};

export default ProductDisplay;
