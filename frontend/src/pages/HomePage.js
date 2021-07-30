import React from "react";
import { Link } from "react-router-dom";

import "./styles/HomePage.css";
import serieImage from "../images/home.png";

export default function HomePage() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col-12 col-md-4">
            <h1>Rick and Morty App</h1>
            <Link className="btn btn-primary" to="/characters">
              Get Started
            </Link>
          </div>

          <div className="Home__col d-none d-md-block col-md-8">
            <img
              src={serieImage}
              alt="Home"
              className="Home__img img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
