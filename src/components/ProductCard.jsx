import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <>
      <div className="card my-3" style={{ height: "500px" }}>
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          height="300px"
        />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={"/product-detail/" + props.id} className="product-title">
              {props.title}
            </Link>
          </h5>
          <p className="card-text">$ {props.price}</p>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() =>
              props.addToCart({
                id: props.id,
                title: props.title,
                price: props.price,
                image: props.image,
              })
            }
          >
            <i className="fa-solid fa-cart-shopping"></i> Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
