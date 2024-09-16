import React from "react";
import { FaCar } from "react-icons/fa6";
import Image from "./images/group 4.jpg";

const Body = () => {
  return (
    <div>
      <h1
        style={{
          // inline styling
          backgroundColor: "brown",
          fontSize: "20px",
        }}
      >
        Hello World
      </h1>
      {/* internal styling */}
      {/* <h2 style={myStyle}>React Class</h2> */}
      {/* External styling */}
      <h3 className="name">my name</h3>
      <button className="btn btn-success submit">submit</button>
      <div>
        <span className="car">
          <FaCar />
        </span>
        <div className="theimage">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
