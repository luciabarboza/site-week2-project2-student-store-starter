import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductView from "../ProductView/ProductView";
import Counter from "../Counter/Counter";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
     <div>
      {/* <Navbar /> */}
      

       <ProductView 
       product = {product}
       productid={product.id} />
      <Footer />
     </div>
  );
};

export default ProductDetailPage;
