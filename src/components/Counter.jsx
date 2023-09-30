import React, { useState } from "react";

function Counter(props) {
  return (
    <>
      <button onClick={() => props.decreaseQty(props.id)}>-</button>
      <span className="mx-3">{props.quantity}</span>
      <button onClick={() => props.increaseQty(props.id)}>+</button>
    </>
  );
}

export default Counter;
