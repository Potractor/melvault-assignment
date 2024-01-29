import React from "react";
import CartItems from "../Components/CartItems/CartItems";
import CartTotalItems from "../Components/CartItems/CartTotalItems";
const Cart = () => {
  return (
    <div>
      <CartItems />
      <CartTotalItems Cart={true} />
    </div>
  );
};

export default Cart;
