import React from "react";
import "./ProductDisplay.css";
const ProductDisplay = ({ product }) => {
  console.log(product);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img className="img1" src={product?.files[0]?.fileUrl} alt="" />
          <img className="img1" src={product?.files[0]?.fileUrl} alt="" />
          <img className="img1" src={product?.files[0]?.fileUrl} alt="" />
          <img className="img1" src={product?.files[0]?.fileUrl} alt="" />
          <img className="img1" src={product?.files[0]?.fileUrl} alt="" />
          <img className="img1" src={product?.files[0]?.fileUrl} alt="" />
        </div>
      </div>
      <div className="productdisplay-right"></div>
    </div>
  );
};

export default ProductDisplay;
