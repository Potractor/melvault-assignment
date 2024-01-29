import React, { useEffect } from "react";
import "./Breadcrum.css";
import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
const Breadcrum = ({ product, productID }) => {
  const [addtocart, setAddToCart] = useState("Add to Cart");
  console.log(product.image);
  const { addToCart, cartItems } = useContext(ShopContext);
  useEffect(() => {
    if (cartItems[productID] > 0) setAddToCart("Added to Cart");
    else setAddToCart("Add to Cart");
  }, []);
  console.log(productID);
  return (
    <div className="breadcrum">
      <div>
        <img className="image1" src={product.image} alt="not-found" />{" "}
        <p>{product.name}</p>
      </div>

      <div className="text1">
        <p>{product.name}</p>
        <p className="text2">Rs. {product.new_price} /-</p>
        <p className="text2-light">{product.old_price}</p>
        <button
          onClick={() => {
            addToCart(product.id);
            setAddToCart("Added to Cart");
          }}
          className="add_to_cart"
        >
          {addtocart}
        </button>
      </div>
    </div>
  );
};

export default Breadcrum;
