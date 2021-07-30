import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import logo from "../images/logo.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            <div className="col">
              <Link className="Navbar__brand" to="/">
                <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                <span className="fw-bold">Rick and Morty</span>
              </Link>
            </div>
            <div className="col"></div>
            <Link className="Navbar__fav" to="/characters">
              <span className="fw-bold">Add new Favorite</span>
            </Link>
            <div className="col"></div>
            <Link className="Navbar__fav" to="/favorites">
              <span className="fw-bold">My Favorite Characters</span>
            </Link>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
