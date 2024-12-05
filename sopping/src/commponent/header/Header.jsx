import React from "react";
import App from "../../App";
import "./Header.css";
import Registor from "../../Registor/Registor";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid ">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* Link to Home Page */}
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* Link to About Page */}
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              {/* Link to Contact Page */}
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
