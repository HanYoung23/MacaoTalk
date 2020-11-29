import React from "react";
import firebase from "firebase/app";
import { fAuth } from "../fbase";

const googleAuth = new firebase.auth.GoogleAuthProvider();

const GLogIn = () => {
  fAuth
    .signInWithPopup(googleAuth)
    .then((result) => {})
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
    });

  return (
    <>
      <h1>Google Log in</h1>
    </>
  );
};

export default GLogIn;
