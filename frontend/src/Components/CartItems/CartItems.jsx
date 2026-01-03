import React from "react";
import "./CartItems.css";
import { useContext, useState } from "react";
import remove from "../Assets/remove.png";
import add from "../Assets/add.png";
import { ShopContext } from "../../Context/ShopContext";
import CartTotalItems from "./CartTotalItems";
const CartItems = (product) => {
  const {
    getDefault,
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
  } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        <p>Add</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          console.log(e.id);
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.newPrice}</p>
                <p>{e.name}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.newPrice * cartItems[e.id]}</p>

                <img
                  style={{ width: "20px" }}
                  src={remove}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                  className=""
                />
                <img
                  style={{ width: "20px" }}
                  src={add}
                  onClick={() => {
                    addToCart(e.id);
                  }}
                  alt=""
                  className=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
