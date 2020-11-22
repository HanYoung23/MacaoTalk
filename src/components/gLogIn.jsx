import React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

const provider = new firebase.auth.GoogleAuthProvider();

const GLogIn = () => {
  let history = useHistory();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      history.push("/home");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });

  return (
    <>
      <h1>Google Log in</h1>
    </>
  );
};

export default GLogIn;
