import React from "react";
import "./Breadcrum.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const Breadcrum = (product) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="breadcrum">
      <div>
        <img className="image1" src={product.product.image} alt="not-found" />
        <p>{product.product.name}</p>
      </div>

      <div className="text1">
        <p>{product.product.name}</p>
        <p className="text2">Rs. {product.product.new_price} /-</p>
        <p className="text2-light">{product.product.old_price}</p>
        <button
          onClick={() => {
            addToCart(product.product.id);
          }}
          className="add_to_cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Breadcrum;
