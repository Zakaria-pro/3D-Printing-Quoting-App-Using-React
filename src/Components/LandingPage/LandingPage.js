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
            <header className="header-brand">IQ</header>
            <p> | </p>
            <a>Home</a>
            <a>About Quoting</a>
            <a> Become Partner</a>
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
                Get Your <br /> Instant Quote
              </h1>
              <h3 className="sub-header-style">
                The new toolpath simulator and corrector <br /> that brings AI
                directly to you
              </h3>
            </div>
            <div className="call-to-action-landing">
              <button className="main-button">Try for free</button>
              <button className="secondary-button">Contact us</button>
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
