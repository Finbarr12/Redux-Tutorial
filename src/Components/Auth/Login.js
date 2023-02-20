import React from "react";
import { useDispatch } from "react-redux";
import { loginusers, logoutusers } from "../ReduxFolder/Redux";
const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(
              loginusers({
                userName: "Paul Pogba",
                Age: 20,
                Email: "Paul@gmail.com",
                Stack: "MERN stack",
              })
            );
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            dispatch(logoutusers());
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Login;
