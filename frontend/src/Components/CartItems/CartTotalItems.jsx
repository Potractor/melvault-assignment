import React, { useContext } from "react";
import "./CartItems.css";

import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
const CartTotalItems = (props) => {
  const { getTotalCartAmount, getDefault } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>subtotal</p>
              <p>Rs.{getTotalCartAmount?.()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>Rs.{getTotalCartAmount()}</h3>
            </div>
          </div>
          {props.Cart && (
            <Link to="/shipping">
              <button onClick={() => {}}>Proceed to checkout</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTotalItems;
