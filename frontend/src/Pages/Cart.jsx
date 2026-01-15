import React, { useState, useEffect, useContext } from "react";
import CartItems from "../Components/CartItems/CartItems";
import CartTotalItems from "../Components/CartItems/CartTotalItems";
import { ShopContext } from "../Context/ShopContext";
import { getCartByUserId } from "../apis/cart";
import { AuthContext } from "../Context/AuthContext";
const Cart = () => {
  const { setCart } = useContext(ShopContext);
  const { userDetails } = useContext(AuthContext);
  const createNewCart = async () => {
    getCartByUserId(userDetails?.id)
      .then((resp) => {
        setCart(resp);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    createNewCart();
  }, []);
  return (
    <div>
      <CartItems />
      <CartTotalItems Cart={true} />
    </div>
  );
};

export default Cart;
