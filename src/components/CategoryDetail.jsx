import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function CategoryDetail() {
  const params = useParams();

  const [products, setProducts] = useState([]);

  function fetchCategoryProduct() {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/" + params.name,
    })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  useEffect(() => {
    fetchCategoryProduct();
  }, [params]);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">{params.name.toUpperCase()}</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-3" key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetail;
