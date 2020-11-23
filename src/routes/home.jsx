import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [message, setMessage] = useState("");
  let history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
  };

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
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Home;
