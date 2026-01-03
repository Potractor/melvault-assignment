import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { getProductsByCategory } from "../apis/product";
import Loader from "../Components/Loader/Loader";
const ShopCategory = ({ category }) => {
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
  useEffect(() => {
    fetchProducts();
  }, [category]);
  return (
    <div className="d-flex flex-column align-items-center">
      {!loading && (
        <div className="shopcategory-products">
          {data?.map((item) => (
            <Item
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
