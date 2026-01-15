import React, { useEffect } from "react";
import "./Breadcrum.css";
import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { AuthContext } from "../../Context/AuthContext";
import Favourites from "../Assets/Favourites";
const Breadcrum = ({ product, productId }) => {
  const [addtocart, setAddToCart] = useState("Add to Cart");
  const { addToCart, cart, userFavourites, addToFavourites } =
    useContext(ShopContext);
  console.log(userFavourites);
  const { userDetails } = useContext(AuthContext);
  const added = Boolean(userFavourites.find((id) => id === product?.id));
  // useEffect(() => {
  //   if (cartItems[productId] > 0) setAddToCart("Added to Cart");
  //   else setAddToCart("Add to Cart");
  // }, []);
  return (
    <div className="breadcrum">
      <div>
        <img
          className="image1"
          src={product?.files[0].fileUrl}
          alt="not-found"
        />{" "}
        <p>{product?.name}</p>
      </div>

      <div className="text1">
        <p>{product?.name}</p>
        <p className="text2">Rs. {product?.newPrice} /-</p>
        <p className="text2-light">{product?.oldPrice}</p>
        <div className="d-flex gap-2">
          {product?.available && (
            <button
              onClick={() => {
                addToCart(product?.id);
                setAddToCart("Added to Cart");
              }}
              className="add_to_cart"
            >
              {addtocart}
            </button>
          )}
          {!product?.available && (
            <button
              style={{ cursor: "none" }}
              className="add_to_cart"
              disabled={true}
            >
              not available
            </button>
          )}
          <button
            className="add_to_cart"
            onClick={async () => {
              await addToFavourites(userDetails?.id, product?.id);
            }}
          >
            <Favourites added={added} size="32" />
            {added ? "saved" : "save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Breadcrum;
