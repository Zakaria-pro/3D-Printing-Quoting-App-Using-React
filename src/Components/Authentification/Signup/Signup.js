import { useState } from "react";

import "./Signup.css";
import Card from "../Common/Card";
import PasswordInput from "../Common/PasswordInput";

const Signup = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [authorized, setAuthorized] = useState(true);

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
    };
    props.onSubmitLogin(enteredCredentials);
    if (props.loggedIn === false) {
      setAuthorized(false);
    }
  };

  const ChooseLogin = () => {
    console.log("Choose Login");
  };

  return (
    <Card>
      <div className="inside-container">
        <header>Create New Account</header>
        <form onSubmit={submitHandler}>
          <div className="user-input">
            <div className="input">
              <p>Email: </p>
              <input type="email" onChange={emailChangeHandler}></input>
            </div>
            <div className="input">
              <p>Password: </p>
              <PasswordInput onChange={passwordChangeHandler} />
              {!authorized && (
                <p className="incorrect-credentials">Incorrect Credentials</p>
              )}
            </div>
            <div className="input">
              <p>Confirm Password: </p>
              <PasswordInput onChange={passwordChangeHandler} />
              {!authorized && (
                <p className="incorrect-credentials">Incorrect Credentials</p>
              )}
            </div>
          </div>
          <button type="submit">Signup</button>
        </form>
        <p style={{ display: "flex", justifyContent: "center" }}>
          You have an account ? &nbsp;{" "}
          <a
            onClick={() => {
              ChooseLogin();
              props.loginOrSignup("login");
            }}
          >
            Login
          </a>
        </p>
      </div>
    </Card>
  );
};

export default Signup;
