// import React from "react";
import { useState } from "react";

// this is a component
const Home = () => {
  let name = "Tola";
  5;
  //   usestate update Value, you use it once variable is not constant, use to remember value
  const [username, setusername] = useState("lola");
  const [input1, setinput1] = useState("");
  console.log(input1);

  //   this is your argument below!
  //   const handclick = (e, t) => {
  //     console.log(e, t);
  //   };
  const happy = () => {
    name = "tolu";
    console.log(name);
    setusername("bolu");
  };
  return (
    <>
      <h1>{name}</h1>
      {/* this is a parameter */}
      {/* <button onClick={() => handclick(1, "tolu")}>click</button> */}
      <p>{username}</p>
      <button onClick={happy}>link</button>
      <input onChange={(e) => setinput1(e.target.value)} type="text" />
    </>
  );
};
export default Home;
