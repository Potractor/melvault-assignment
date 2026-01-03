import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { getProductsById } from "../apis/product";
const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState(null);
  const fetchProduct = async () => {
    getProductsById(productId)
      .then((resp) => {
        console.log(resp);
        setProduct(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(product);
  useEffect(() => {
    console.log("came here");
    fetchProduct();
  }, [productId]);
  return (
    <div>
      <ProductDisplay product={product} />
      <Breadcrum product={product} productId={productId} />
    </div>
  );
};

export default Product;
