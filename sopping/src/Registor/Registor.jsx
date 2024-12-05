import React from "react";
import "./Registor.css";
import Header from "../commponent/header/Header"; // Assuming this is the correct path
import { Link } from "react-router-dom";
import Login from "./Login";

const Registor = () => {
  return (
    <div className="Registor">
      <form>
        <label>Name </label>
        <input type="text" />
        <br />
        <br />
        <label>phone number</label>
        <input type="number" />
        <label>city</label>
        <input type="text" />
        <label>email </label>
        <input type="email" />
        <br />
        <br />
        <label>password </label>
        <input type="password" />
        <br />
        <br />
        <Link to="/ProductList">
          <button>Registor</button>
        </Link>
        already have an account <Link to="/Login">login</Link>
      </form>
    </div>
  );
};
export default Registor;
