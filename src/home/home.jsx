import React, { useState } from "react";
import macaoLogo from "../imgs/macao.png";
import logIn from "../imgs/logIn.png";
import "firebase/auth";

const Home = () => {
  const [userInfo, setUserInfo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () => {
    console.log("onclick");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("asdf");
  };

  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((user) => {})
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage);
  //   });

  return (
    <div>
      <img src={macaoLogo} width="100" height="100" alt="macao"></img>
      <div>Macaotalk</div>
      <img src={logIn} width="80" height="80" alt="logIn" />
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" />
      </form>
      <div>
        <button onClick={onClick}>Log in with Google</button>
      </div>
    </div>
  );
};

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   var errorCode = error.code;
//   var errorMessage = error.message;
// });

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     var displayName = user.displayName;
//     var email = user.email;
//     var emailVerified = user.emailVerified;
//     var photoURL = user.photoURL;
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     var providerData = user.providerData;
//   } else {
//     // User is signed out.
//     // ...
//   }
// });

export default Home;
