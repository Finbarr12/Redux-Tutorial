import React from "react";
import { useSelector } from "react-redux";

const Profils = () => {
  const user = useSelector((state) => state.Redux.current);

  return (
    <div>+
      <h2>User</h2>
      <div>
        UserName: <span style={{ marginLeft: "30px" }}>{user?.userName}</span>
      </div>
      <div>
        Age: <span style={{ marginLeft: "30px" }}>{user?.Age}</span>
      </div>
      <div>
        Email: <span style={{ marginLeft: "30px" }}>{user?.Email}</span>
      </div>
      <div>
        Stack:<span style={{ marginLeft: "30px" }}> {user?.Stack}</span>
      </div>
    </div>
  );
};

export default Profils;
