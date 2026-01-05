import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { AuthContext } from "../Context/AuthContext";
import Item from "../Components/Item/Item";
import { getProductsByCategory } from "../apis/product";
import Loader from "../Components/Loader/Loader";
import { getCartByUserId } from "../apis/cart";
const ShopCategory = ({ category }) => {
  const { userDetails } = useContext(AuthContext);
  const { setCart } = useContext(ShopContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    getProductsByCategory(category)
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };
  const createNewCart = async () => {
    getCartByUserId(userDetails?.id)
      .then((resp) => {
        setCart(resp);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchProducts();
    createNewCart();
  }, [category]);
  return (
    <div className="d-flex flex-column align-items-center">
      {!loading && (
        <div className="shopcategory-products">
          {data?.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.files[0]?.fileUrl}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              availability={item.available}
            />
          ))}
        </div>
      )}
      {loading && (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
