import React, { useState } from "react";

const Missedclass = () => {
  const time = "Your time start now";
  const [Increase, setIncrease] = useState(0);
  //   const [Decrease, setDecrease] = useState(0);

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const volume = () => {
    setIncrease(Increase + 1);
  };

  const reduce = () => {
    setIncrease(Increase - 1);
  };
  return (
    <>
      <div>
        <h1>{time}</h1>

        <button onClick={volume}>Increase</button>
        <button onClick={reduce}>Decrease</button>
        <h1>{Increase}</h1>
      </div>

      <div>
        <label htmlFor="">Username</label>
        <input
          onChange={(event) => {
            setusername(event.target.value);
          }}
          type="text"
        />
        <label htmlFor="">email</label>
        <input
          onChange={(event) => {
            setemail(event.target.value);
          }}
          type="text"
        />
        <label htmlFor="">password</label>
        <input
          onChange={(event) => {
            setpassword(event.target.value);
          }}
          type="text"
        />
        <button type="submit">submit</button>

        <div>
          <h1>{username}</h1>
          <h1>{email}</h1>
          <h1>{password}</h1>
        </div>
      </div>
    </>
  );
};

export default Missedclass;
