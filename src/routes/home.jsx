import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [message, setMessage] = useState("");
  const inputText = useRef("");
  let history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    dbSet();
    inputText.current.value = "";
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

  const dbRef = firebase.database().ref().child("infos");

  const dbSet = () => {
    dbRef.set({
      text: inputText.current.value,
    });
  };

  const dbRead = () => {
    dbRef.on("value", (snap) => {
      console.log(snap.child("text").val());
      console.log(snap);
    });
  };

  return (
    <>
      <button onClick={onClick}>Log Out</button>
      <h1>home</h1>
      <form onSubmit={onSubmit}>
        <input ref={inputText} type="text" />
        <input type="submit" />
      </form>
      <button onClick={dbRead}>asdf</button>
      <div className="textField"></div>
    </>
  );
};

export default Home;
