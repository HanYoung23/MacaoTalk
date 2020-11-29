import React, { useEffect, useState } from "react";
import macaoLogo from "../imgs/macao.png";
import logIn from "../imgs/logIn.png";
import "firebase/auth";
import SignIn from "../components/signIn";
import LogIn from "../components/logIn";
import GLogIn from "../components/gLogIn";

const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(null);
  const [clickedBtn, setClickedBtn] = useState(null);

  const onClick = (event) => {
    const target = event.target.id;
    setClickedBtn(target);
  };

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
      {clickedBtn === "logIn" && <LogIn />}
      {clickedBtn === "gLogIn" && <GLogIn />}
      <div>
        <button id="logIn" onClick={onClick}>
          Log in with E-mail
        </button>
        <button id="gLogIn" onClick={onClick}>
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
