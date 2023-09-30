import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import axios from "axios";

function ProductCardList(props) {
  const [products, setProducts] = useState([]);

  function fetchProduct() {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  addToCart={props.addToCart}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductCardList;
