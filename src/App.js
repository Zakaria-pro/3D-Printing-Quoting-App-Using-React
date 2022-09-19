import React, { useState } from "react";

import "./App.css";

import Authentify from "./Components/Authentification/Authentify";
import LandingPage from "./Components/LandingPage/LandingPage";
import GetQuote from "./Components/GetQuote/GetQuote";

function App() {
  const [login, setLogin] = useState(false);
  const [getQuote, setGetQuote] = useState(false);

  const getQuoteClickHandler = () => {
    setGetQuote(true);
  };

  const areYouLogin = (userExist) => {
    if (userExist) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="App">
      {/* Landing Page */}
      {!getQuote && <LandingPage getQuoteHandler={getQuoteClickHandler} />}

      {/* User click on Get Instant Quote but not logged in --> Login Page*/}
      {getQuote && !login && (
        // <Login onSubmitLogin={submitLoginHandler} loggedIn={login} />
        <Authentify loggedIn={areYouLogin}></Authentify>
      )}

      {/* User Fill the login Form with correct credentials --> Quoting Page */}
      {getQuote && login && <GetQuote />}
    </div>
  );
}

export default App;
