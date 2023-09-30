import "./App.css";

// Packages import
import { Routes, Route } from "react-router-dom";

// Component Imports
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProductCardList from "./components/ProductCardList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import CategoryDetail from "./components/CategoryDetail";
import { useState } from "react";

function App() {
  const [myCart, setMyCart] = useState([]);

  function addToCart(productData) {
    // Logic to add item to cart
    let itemExist = myCart.find((item) => item.id == productData.id);

    if (itemExist) {
      setMyCart(
        myCart.map((item) => {
          if (item.id === productData.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    } else {
      // If item doesnot exits on cart
      setMyCart([...myCart, { ...productData, quantity: 1 }]);
    }

    // Check if productData already exists in myCart
  }

  console.log(myCart);

  function removeFromCart(productId) {
    // Logic to remove item from cart

    let filteredProduct = myCart.filter((item) => item.id != productId);
    setMyCart(filteredProduct);
  }

  function increaseQty(productId) {
    // Logic to increase qty of item
    setMyCart(
      myCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function decreaseQty(productId) {
    // Logic to decrease qty of item
    setMyCart(
      myCart.map((item) => {
        if (item.id === productId) {
          if (item.quantity - 1 <= 0) {
            return { ...item, quantity: 1 };
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        } else {
          return item;
        }
      })
    );
  }

  function calculateGrandTotal() {
    let total = 0;
    for (let i = 0; i < myCart.length; i++) {
      total = total + myCart[i].quantity * myCart[i].price;
    }
    return total.toFixed(2);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProductCardList addToCart={addToCart} />
            </>
          }
        />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <Cart
              myCart={myCart}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              calculateGrandTotal={calculateGrandTotal}
            />
          }
        />
        <Route path="/category/:name" element={<CategoryDetail />} />
      </Routes>
    </>
  );
}

export default App;
