import { useState } from "react";

import "./Signup.css";
import "../Authentify.css";
import Card from "../Common/Card";
import PasswordInput from "../Common/PasswordInput";

const Signup = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [authorized, setAuthorized] = useState(true);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(enteredPassword);
  };

  const confirmPasswordChangeHandler = (event) => {
    if (enteredPassword === event.target.value && event.target.value !== null) {
      console.log("match");
      setPasswordMatch(true);
    } else {
      console.log("does not match");
      setPasswordMatch(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCredentials = {
      email: enteredEmail,
      password: enteredPassword,
    };
    if (!passwordMatch) {
      setAuthorized(false);
    } else {
      setAuthorized(true);
      console.log(enteredCredentials);
    }

    // props.onSubmitSignup(enteredCredentials);
    // if (props.loggedIn === false) {
    //   setAuthorized(false);
    // }
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
              <PasswordInput
                onChange={passwordChangeHandler}
                isMatched={passwordMatch}
              />
            </div>
            <div className="input">
              <p>Confirm Password: </p>
              <PasswordInput
                onChange={confirmPasswordChangeHandler}
                isMatched={passwordMatch}
              />
              {!authorized && !passwordMatch && (
                <p className="incorrect-credentials">Password does not match</p>
              )}
            </div>
          </div>
          <button type="submit">Create Account</button>
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
