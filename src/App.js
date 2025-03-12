// import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import Changeinput from "./Changeinput";
import Classwork from "./Classwork";
import FirstComponent from "./FirstComponent";
import Home from "./Home";
import Missedclass from "./Missedclass";
import Nav from "./Nav";
import SportifyPlaylist from "./SportifyPlaylist";

import TodoApp from "./Todoapp";
import Formik from "./Formik";
import Loginform from "./Loginform";
import Counter from "./Counter";

function App() {
  // let myStyle = {
  //   backgroundColor: "blue",
  //   fontSize: "40px",
  // };
  // const handleAlert = () => {
  //   alert("HELLO CLASS!");
  // };
  // const signup = () => {
  //   console.log("signup successful");
  // };
  // const welcome = () => {
  //   console.log("welcome everyone");
  // };
  return (
    <>
      <Routes>
        <Route path="/formik" element={<Formik />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/Todoapp" element={<TodoApp />} />
      </Routes>
      {/* <Nav /> */}
      {/* <Body /> */}
      {/* <Missedclass /> */}
      {/* <Nav /> */}
      {/* <Home /> */}
      {/* <Classwork /> */}
      {/* <TodoApp /> */}
      {/* <SportifyPlaylist /> */}
      {/* <div>Hello react</div> */}
      {/* <Changeinput /> */}

      {/* <FirstComponent
        style="bg-primary"
        FirstComponent
        title="Submit"
        change={handleAlert}
      />
      <FirstComponent style="bg-secondary" title="Submit" change={signup} />
      <FirstComponent style="bg-success" title="Submit" change={welcome} /> */}
    </>
  );
}
export default App;
