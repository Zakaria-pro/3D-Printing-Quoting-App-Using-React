import React, { useState, useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "./App.css";

import Authentify from "./Components/Authentification/Authentify";
import LandingPage from "./Components/LandingPage/LandingPage";
import GetQuote from "./Components/GetQuote/GetQuote";

function App() {
  const [authUser, setAuthUser] = useState(false);

  const PrivateRoute = (props) => {};

  // authUser ? (
  //   <Route path="/quote" element={<GetQuote />}></Route>
  // ) : (
  //   <Route path="/login" element={<Authentify></Authentify>}></Route>
  // );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Authentify />}></Route>
          {/* <Route path="/quote" element={<PrivateRoute />}> */}
          <Route path="/quote" element={<GetQuote />}></Route>
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );

  // authUser ? props.element :
}

export default App;
