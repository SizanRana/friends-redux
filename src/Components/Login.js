import { Button } from "@material-ui/core";
import React from "react";
import "../CSS/Login.css";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.freelogodesign.org/file/app/client/thumb/53fc694f-849b-466a-adb2-97e0f6cebaa8_200x200.png?1596080141318"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
