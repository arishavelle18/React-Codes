import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../CounterSlice";

const ProductQuantity = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <>
      <h1>In Cart Product</h1>
      <div className="container">
        <h1>Product Number</h1>
        <div className="quantity">
          <div>Product Quantity</div>
          <a href="#" onClick={() => dispatch(increment())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductQuantity;
