import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <form>
        <label>name</label>
        <input type="text" />
        <label>password</label>
        <input type="password" />
        <button onClick="login sucessful">login</button>
      </form>
    </div>
  );
};
export default Login;
