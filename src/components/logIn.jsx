import React, { useState } from "react";
import "firebase/auth";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

const LogIn = (props) => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setUserId(user.uid);
        props.isLogIn("login");
        userData(user.uid, user.email, user.email, user.photoURL);
        setEmail("");
        setPassword("");
        onChangePage();
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

  const onChangePage = () => {
    history.push("/home");
  };

  const userData = (userId, name, email, imageUrl) => {
    props.userInfo(userId, name, email, imageUrl);
  };

  return (
    <>
      <div>Log In</div>
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
