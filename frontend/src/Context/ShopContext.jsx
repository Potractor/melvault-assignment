import React, { useState, createContext } from "react";
import { addProductToCart, updateCart } from "../apis/cart";
import { addProductToFavourites, getUserFavourites } from "../apis/user";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const cartItems = cart?.items;
  const [userFavourites, setUserFavourites] = useState([]);
  const addToFavourites = async (id, productId) => {
    try {
      await addProductToFavourites(id, productId);
      const response = await getUserFavourites(id);
      console.log(response);
      setUserFavourites(response);
    } catch (error) {
      console.log(error);
    }
  };
  const increaseItemCount = (itemId) => {
    let tempItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, count: item.count + 1 } : item
    );
    updateCart({ ...cart, items: tempItems })
      .then((resp) => {
        setCart(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const decreaseItemCount = async (itemId) => {
    let tempItems = cartItems.reduce((temp, item) => {
      if (item.id === itemId) {
        item.count === 1
          ? temp.push({ ...item, count: -1 })
          : temp.push({ ...item, count: item.count - 1 });
      } else temp.push(item);
      return temp;
    }, []);
    updateCart({ ...cart, items: tempItems })
      .then((resp) => {
        setCart(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addToCart = async (id) => {
    let ret;
    addProductToCart(id, cart?.id)
      .then((resp) => {
        ret = resp;
        setCart(resp);
      })
      .catch((err) => {
        console.error(err);
      });
    return ret;
  };
  const getTotalCartItems = () => {
    return cartItems?.length || 0;
  };
  const getTotalCartAmount = () => {
    return cartItems.reduce((sum, item) => {
      return sum + item.count * item.price;
    }, 0);
  };
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    // all_product,
    // cartItems,
    addToCart,
    // setCartItems,
    // removeFromCart,
    increaseItemCount,
    decreaseItemCount,
    cart,
    setCart,
    cartItems,
    setUserFavourites,
    addToFavourites,
    userFavourites,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
