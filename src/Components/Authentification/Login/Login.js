import { useState } from "react";

import "./Login.css";
import Card from "./../Common/Card";
import PasswordInput from "./../Common/PasswordInput";

const Login = (props) => {
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
              <PasswordInput onChange={passwordChangeHandler} />
              {!authorized && (
                <p className="incorrect-credentials">Incorrect Credentials</p>
              )}
            </div>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </Card>
  );
};

export default Login;
