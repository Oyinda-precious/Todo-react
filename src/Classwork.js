import { useState } from "react";

import React from "react";

const Classwork = () => {
  let classs = "desk";
  const [username1, setusername1] = useState("");
  const [username2, setusername2] = useState("");
  const [userarray, setuserarray] = useState([]);
  //   console.log(username1);
  //   console.log(username2);

  const clickclick = () => {
    let userdetails = {
      usernamee: username1,
      email: username2,
    };
    console.log(userdetails);
    setuserarray([...userarray, userdetails]);
    console.log(userarray);
  };
  return (
    <>
      <div>
        {/* <p>{username1}</p>
        <p>{username2}</p> */}
        <input onChange={(e) => setusername1(e.target.value)} type="text" />
        <input onChange={(e) => setusername2(e.target.value)} type="text" />
        <button onClick={clickclick}>clickme</button>
        {userarray.map((user) => (
          <>
            <h1>{user.usernamee}</h1>
            <h1>{user.email}</h1>
          </>
        ))}
      </div>
    </>
  );
};

export default Classwork;
