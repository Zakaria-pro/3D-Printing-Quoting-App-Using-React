import { useState } from "react";

import "./Login.css";
import "../Authentify.css";
import Card from "./../Common/Card";
import PasswordInput from "./../Common/PasswordInput";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [authorized, setAuthorized] = useState(true);
  const [match, setMatch] = useState(true);
  const [loggedIn, setloggedIn] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCredentials = {
      email: enteredEmail,
      password: enteredPassword,
      id: Math.random().toString(),
    };
    if (
      enteredCredentials.email === "zhamedoun1@gmail.com" &&
      enteredCredentials.password === "Hello"
    ) {
      setloggedIn(true);
    }
    if (loggedIn === false) {
      setAuthorized(false);
      setMatch(false);
    }
  };

  return (
    <Card>
      <div className="inside-container">
        <header>Log in to your account</header>
        <form onSubmit={submitHandler}>
          <div className="user-input">
            <div className="input">
              <p>Email: </p>
              <input type="email" onChange={emailChangeHandler}></input>
            </div>
            <div className="input">
              <p>Password: </p>
              <PasswordInput
                onChange={passwordChangeHandler}
                isMatched={match}
              />
              {!authorized && (
                <p className="incorrect-credentials">Incorrect Credentials</p>
              )}
            </div>
          </div>

          <button type="submit">Login</button>
        </form>
        <p style={{ display: "flex", justifyContent: "center" }}>
          New user ? &nbsp;{" "}
          <a
            onClick={() => {
              props.loginOrSignup("Signup");
            }}
          >
            Sign up
          </a>
        </p>
      </div>
    </Card>
  );
};

export default Login;
