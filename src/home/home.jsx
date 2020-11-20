import React from "react";
import macaoLogo from "../imgs/macao.png";
import logIn from "../imgs/logIn.png";
import fbase from "../fbase";

const Home = () => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <div>
      <img src={macaoLogo} width="100" height="100" alt="macao"></img>
      <div>Macaotalk</div>
      <img src={logIn} width="80" height="80" alt="logIn" />
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
