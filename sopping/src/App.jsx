import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
<script src="../../cdn.jsdelivr.net/npm/bootstrap%405.3.1/dist/js/bootstrap.bundle.min.js"></script>;
import "./App.css";

import Home from "./commponent/home/Home";
import About from "./commponent/about/About";
import Contact from "./commponent/contact/Contact";
import Header from "./commponent/header/Header";
/*import productlist from "./commponent/card/Productlist";*/
import Card from "./commponent/card/Card";
import Registor from "./Registor/Registor";
import Login from "./Registor/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./commponent/card/Productlist";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        {/* Include the Header in your layout */}
        <Header />
        {/* Define Routes */}
        <div className="container mt-3">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Registor" element={<Registor />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ProductList" element={<ProductList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
