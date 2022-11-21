import React from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";
import Image from "../../assets/Saly-21.png";

import CanvasComponent from "./CanvasComponent";

const LandingPage = (props) => {
  return (
    <div className="page-background">
      <div className="App-container">
        <header className="App-header">
          <div className="brand">
            <header className="header-brand">3DP</header>
            <p> | </p>
            <a href="#home">Home</a>
            <a href="#about">3D Printing</a>
            <a href="#contact"> Contact us</a>
          </div>
          <div className="call-to-action">
            <Link to="/quote">
              <button className="button-style" onClick={props.getQuoteHandler}>
                Get Instant Quote
              </button>
            </Link>
          </div>
        </header>

        <section className="App-content">
          <div className="left">
            <div className="header-sub">
              <h1 className="header-style">
                Shop Useful <br /> 3D Printed Parts Now
              </h1>
              <h3 className="sub-header-style">
                get you 3D printed part in less than 24 hour <br />
              </h3>
            </div>
            <div className="call-to-action-landing">
              <button className="secondary-button">Upload your own</button>
              <button className="main-button ">Shop now</button>
            </div>
          </div>
          <div className="canvas-container">
            <CanvasComponent />
          </div>
        </section>

        <footer className="App-footer"></footer>
      </div>
    </div>
  );
};

export default LandingPage;
