import React from "react";
import "./CartItems.css";
import { useContext, useState } from "react";
import remove from "../Assets/remove.png";
import add from "../Assets/add.png";
import { ShopContext } from "../../Context/ShopContext";
const CartItems = (product) => {
  const {
    cart,
    cartItems,
    getDefault,
    getTotalCartAmount,
    all_product,
    increaseItemCount,
    decreaseItemCount,
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
      {cartItems.map((e) => {
        return (
          <div key={e.id}>
            <div className="cartitems-format cartitems-format-main">
              <img src={e.imageUrl} alt="" className="carticon-product-icon" />
              <p>{e.price}</p>
              <p>{e.name}</p>
              <img
                style={{ width: "20px" }}
                src={remove}
                onClick={() => {
                  decreaseItemCount(e.id);
                }}
                alt=""
                className=""
              />
              <button className="cartitems-quantity">{e.count}</button>
              <img
                style={{ width: "20px" }}
                src={add}
                onClick={() => {
                  increaseItemCount(e.id);
                }}
                alt=""
                className=""
              />
              <p>{e.price * e.count}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
