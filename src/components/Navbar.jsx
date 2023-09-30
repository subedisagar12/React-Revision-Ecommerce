import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [allCategory, setAllCategory] = useState([]);

  function fetchCategory() {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/categories",
    })
      .then((res) => {
        console.log(res.data);
        setAllCategory(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Ecommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  {allCategory.map((category) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/category/" + category}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                  {/* <li>
                    <a className="dropdown-item" href="#">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kitchen Appliances
                    </a>
                  </li> */}
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/cart">
                  My Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
