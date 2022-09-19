import { useState } from "react";

import Card from "./Common/Card";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Authentify = (props) => {
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
      props.loggedIn(true);
    }
  };

  const [youHaveAnAccount, setYouHaveAnAccount] = useState(true);
  const loginOrSignup = (los) => {
    if (los === "login") {
      setYouHaveAnAccount(true);
    } else {
      setYouHaveAnAccount(false);
    }
  };

  return (
    <div>
      {youHaveAnAccount && (
        <Login
          onSubmitLogin={submitLoginHandler}
          loginOrSignup={loginOrSignup}
          loggedIn={false}
        />
        // loggedIn={login}
      )}
      {!youHaveAnAccount && <Signup loginOrSignup={loginOrSignup}></Signup>}
    </div>
  );
};

export default Authentify;
