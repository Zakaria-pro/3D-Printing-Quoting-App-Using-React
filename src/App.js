import React, { useState } from "react";

import "./App.css";

import Login from "./Components/Authentification/Login/Login";
import LandingPage from "./Components/LandingPage/LandingPage";
import GetQuote from "./Components/GetQuote/GetQuote";

function App() {
  const [login, setLogin] = useState(false);
  const [getQuote, setGetQuote] = useState(false);

  const getQuoteClickHandler = () => {
    setGetQuote(true);
  };

  const submitLoginHandler = (entredCredentials) => {
    const userCredentials = {
      ...entredCredentials,
      id: Math.random().toString(),
    };
    let email = userCredentials.email;
    let password = userCredentials.password;

    console.log(userCredentials);
    if (email === "zhamedoun1@gmail.com" && password === "Hello") {
      console.log(userCredentials);
      setLogin(true);
    }
  };

  return (
    <div className="App">
      {/* Landing Page */}
      {!getQuote && <LandingPage getQuoteHandler={getQuoteClickHandler} />}

      {/* User click on Get Instant Quote but not logged in --> Login Page*/}
      {getQuote && !login && (
        <Login onSubmitLogin={submitLoginHandler} loggedIn={login} />
      )}

      {/* User Fill the login Form with correct credentials --> Quoting Page */}
      {getQuote && login && <GetQuote />}
    </div>
  );
}

export default App;
