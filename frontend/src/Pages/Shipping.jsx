import React from "react";
import CartTotalItems from "../Components/CartItems/CartTotalItems";
import Address from "./Address";

const Shipping = () => {
  return (
    <div>
      <CartTotalItems Cart={false} />
      <Address />
    </div>
  );
};

export default Shipping;
