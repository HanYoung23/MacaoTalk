import React, { useEffect, useState } from "react";
import macaoLogo from "../imgs/macao.png";
import logIn from "../imgs/logIn.png";
import "firebase/auth";
import firebase from "firebase/app";
import SignIn from "../components/signIn";
import LogIn from "../components/logIn";

const Auth = (props) => {
  const [isLogIn, setIsLogIn] = useState("");
  const [clickedBtn, setClickedBtn] = useState("");

  const onClick = (event) => {
    const target = event.target.id;
    setClickedBtn(target);
  };

  useEffect(){
    if(isLogIn !== ""){
      props
    }
  }

  return (
    <div>
      <img src={macaoLogo} width="100" height="100" alt="macao"></img>
      <div>Macaotalk</div>
      <img src={logIn} width="80" height="80" alt="logIn" />
      {clickedBtn === "signIn" && (
        <SignIn
          clickedBtn={(clickedBtn) => {
            setClickedBtn({ clickedBtn });
          }}
        />
      )}
      {clickedBtn === "logIn" && (
        <LogIn
          isLogIn={(isLogIn) => {
            setIsLogIn(isLogIn);
          }}
        />
      )}
      <div>
        <button id="logIn" onClick={onClick}>
          Log in with Email
        </button>
        <button id="google" onClick={onClick}>
          Log in with Google
        </button>
        <button id="signIn" onClick={onClick}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Auth;
