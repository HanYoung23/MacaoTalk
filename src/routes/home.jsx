import React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  const onClick = () => {
    onLogOut();
  };

  const onLogOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        onChangePage();
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const onChangePage = () => {
    history.push("/");
  };

  return (
    <>
      <button onClick={onClick}>Log Out</button>
      <h1>home</h1>
    </>
  );
};

export default Home;
