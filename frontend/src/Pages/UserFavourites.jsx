import React, { useContext, useEffect, useState } from "react";
import { getUserFavouritesInfo } from "../apis/user";
import { AuthContext } from "../Context/AuthContext";
import Item from "../Components/Item/Item";
import Loader from "../Components/Loader/Loader";
const UserFavourites = () => {
  const { userDetails } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUserFavouritesInfo(userDetails?.id)
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className=" d-flex flex-column align-items-center">
      {!loading && (
        <div className="shopcategory-products">
          {data.map((item, i) => {
            return (
              <Item
                key={item.id}
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

export default UserFavourites;
