import React from "react";

import "./LandingPage.css";
import Image from "../../assets/Saly-21.png";

import CanvasComponent from "./CanvasComponent";

const LandingPage = (props) => {
  return (
    <div className="page-background">
      <div className="App-container">
        <div className="App-header">
          <div className="brand">
            <header className="header-brand">Kelvin.</header>
            <p> | </p>
            <a>Home</a>
            <a>About Quoting</a>
            <a> Become Partner</a>
          </div>
          <div className="call-to-action">
            <button className="button-style" onClick={props.getQuoteHandler}>
              Get Instant Quote
            </button>
          </div>
        </div>

        <div className="App-content">
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
            {/* <img className="image-style" alt="saly" src={Image} /> */}
            <CanvasComponent />
          </div>
        </div>
        <div className="App-footer"></div>
      </div>
    </div>
  );
};

export default LandingPage;
