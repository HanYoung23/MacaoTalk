import React, { useState } from "react";
import firebase from "firebase/app";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        props.clickedBtn("logIn");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
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
      <div>CreateAccount</div>
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
export default SignIn;
