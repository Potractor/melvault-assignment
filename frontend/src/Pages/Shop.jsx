import React, { useContext } from "react";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
const Shop = () => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shopcategory-products">
      {all_product.map((item, i) => {
        return (
          <Item
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        );
      })}
    </div>
  );
};

export default Shop;
