import React, { useContext, useEffect, useState } from "react";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import axiosInstance from "../apis/axiosInstance";
import { getAllProducts } from "../apis/product";
import Loader from "../Components/Loader/Loader";
const Shop = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    getAllProducts()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" d-flex flex-column align-items-center">
      {!loading && (
        <div className="shopcategory-products">
          {data.map((item, i) => {
            console.log(item);
            return (
              <Item
                id={item.id}
                name={item.name}
                image={item?.files[0].fileUrl}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                availability={item.available}
              />
            );
          })}
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

export default Shop;
