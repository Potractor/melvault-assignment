import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();

  const product = all_product.find((e) => e.id === Number(productID));

  return (
    <div>
      <ProductDisplay product={product} />
      <Breadcrum product={product} productID={productID} />
    </div>
  );
};

export default Product;
