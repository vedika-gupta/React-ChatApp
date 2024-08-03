import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
  <p>Sign in with Google to chat!</p>
  <button className="sign-in" onClick={googleSignIn}>
    Sign In
  </button>
  <p className="assignment-footer">Assignment by Vedika Gupta - AP21110010515</p>
</main>

  );
};

export default Welcome;
