import React, { useState } from "react";

function Changeinput() {
  const [showing, setshowing] = useState();

  const Change = () => {
    setshowing(!showing);
  };
  return (
    <div>
      <input type={showing ? "text" : "password"} placeholder="password" />
      <button onClick={Change}>Change</button>
    </div>
  );
}

export default Changeinput;
