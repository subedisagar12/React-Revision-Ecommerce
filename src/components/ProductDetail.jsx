import React, { useEffect, useState } from "react";
import ProductCardList from "./ProductCardList";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();

  function fetchSingleProduct() {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/" + params.id,
    })
      .then((res) => {
        console.log(res.data);
        setProductDetail(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  useEffect(() => {
    fetchSingleProduct();
  }, [params]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <img src={productDetail.image} width={"100%"} />
          </div>
          <div className="col-8">
            <h1>{productDetail.title}</h1>

            <h3>$ {productDetail.price}</h3>

            <p>{productDetail.description}</p>

            <a href="#" className="btn btn-outline-primary btn-sm">
              <i className="fa-solid fa-cart-shopping"></i> Add to cart
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center">Recommended Product</h2>
          <ProductCardList />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
