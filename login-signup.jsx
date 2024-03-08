import React, { useState } from "react";
import "./login-signup.css";

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">

      <h1>{action}</h1>
      <div className="inputs-box">
        {action === "Log in" ? (
          <div></div>
        ) : (
          <div className="input">
            <input type="text" placeholder="Username" autoFocus />
          </div>
        )}
        <div className="input">
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forget-password">
        {action === "Log in" ? <a href="#">Forget Password ?</a> : <div> <br /> </div>}
      </div>
      <div className="submit-buttons">
        <button
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => setAction("Log in")}
        >
          Log in
        </button>
        <button
          className={action === "Log in" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign up")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
