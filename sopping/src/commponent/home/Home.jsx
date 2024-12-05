import React from "react";
import App from "../../App";
import "./Home.css";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import ProductList from "../card/Productlist";
import Header from "../header/Header";

const Home = () => {
  return (
    <div className="container bg-image">
      <h1>All fruit do you want is here in our shop!💒</h1>
      <Link to="/Registor">
        <button>buy now</button>
      </Link>
    </div>
  );
};
export default Home;
