import React from "react";
import Counter from "./Counter";

function Cart(props) {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {props.myCart.map((item) => (
            <tr>
              <td>
                <img src={item.image} width="50px" />
              </td>

              <td>{item.title}</td>
              <td>${item.price}</td>
              <td style={{ width: "200px" }}>
                <Counter
                  id={item.id}
                  quantity={item.quantity}
                  increaseQty={props.increaseQty}
                  decreaseQty={props.decreaseQty}
                />
              </td>
              <td>$ {(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => props.removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnp-wi7hRc6yAbraePFgeIGDovGXtKjYPYemZOddQdSDl_Ngc6ssXZ97mQBJgifspp5o&usqp=CAU"
                width="50px"
              />
            </td>

            <td>Sony Headphones</td>
            <td>$15</td>
            <td>
              {" "}
              <Counter />{" "}
            </td>
            <td>$30</td>
          </tr>

          <tr>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnp-wi7hRc6yAbraePFgeIGDovGXtKjYPYemZOddQdSDl_Ngc6ssXZ97mQBJgifspp5o&usqp=CAU"
                width="50px"
              />
            </td>

            <td>Sony Headphones</td>
            <td>$15</td>
            <td>
              <Counter />
            </td>
            <td>$30</td>
          </tr>

          <tr>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnp-wi7hRc6yAbraePFgeIGDovGXtKjYPYemZOddQdSDl_Ngc6ssXZ97mQBJgifspp5o&usqp=CAU"
                width="50px"
              />
            </td>

            <td>Sony Headphones</td>
            <td>$15</td>
            <td>
              <Counter />
            </td>
            <td>$30</td>
          </tr> */}

          <tr>
            <th colSpan="4">Total</th>
            <th> ${props.calculateGrandTotal()}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
