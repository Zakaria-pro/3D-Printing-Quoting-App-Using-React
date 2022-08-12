import { useState } from "react";

import "./PasswordInput.css";
import showPwdImg from "./eye.svg";
import hidePwdImg from "./eye-crossed.svg";

const PasswordInput = (props) => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="pwd-container">
      <input
        name="pwd"
        type={isRevealPwd ? "text" : "password"}
        onChange={props.onChange}
      />
      <img
        title={isRevealPwd ? "Hide password" : "Show password"}
        src={isRevealPwd ? hidePwdImg : showPwdImg}
        onClick={() => setIsRevealPwd((prevState) => !prevState)}
      />
    </div>
  );
};

export default PasswordInput;
