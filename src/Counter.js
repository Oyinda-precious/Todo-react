import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increament, Decreament } from "./Redux/Userslice";

const Counter = () => {
  const { value } = useSelector((state) => state.userlice);
  console.log(value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(Increament())}>+</button>
      <button onClick={() => dispatch(Decreament())}>-</button>
    </div>
  );
};

export default Counter;
