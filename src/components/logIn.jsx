import React, { useState } from "react";
import "firebase/auth";
import firebase from "firebase/app";

const LogIn = (props) => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setUserId(user.uid);
        props.isLogIn("login");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      });
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div>Sign In</div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={onChangeEmail}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={onChangePassword}
          value={password}
        />
        <input type="submit" value="확인" />
      </form>
    </>
  );
};

export default LogIn;
