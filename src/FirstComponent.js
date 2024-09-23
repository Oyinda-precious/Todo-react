import React from "react";
import SecondComponent from "./SecondComponent";

const FirstComponent = (props) => {
  return (
    <>
      {/* <h1>this is a child app</h1> */}
      {/* <SecondComponent/> */}
      <button onClick={props.change} className={props.style}>
        {props.title}
      </button>
    </>
  );
};

export default FirstComponent;
