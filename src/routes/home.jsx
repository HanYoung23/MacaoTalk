import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import UserList from "../components/userList";
import { fAuth, fStore } from "../fbase";

const Home = ({ userObj, isSignedOut }) => {
  const [textStorage, setTextStorage] = useState([]);
  let history = useHistory();
  const inputText = useRef();
  const textArray = [];

  const onLogOut = () => {
    fAuth.signOut();
    isSignedOut(false);
  };

  const onChangePage = () => {
    history.push("conversation");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addFireStore(inputText.current.value);
  };

  const addFireStore = (message) => {
    fStore
      .collection(userObj.uid)
      .doc("texts")
      .set({
        text1: message,
      })
      .then(() => {})
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    inputText.current.value = "";
  };

  return (
    <>
      <button onClick={onLogOut}>LogOut</button>
      <button onClick={onChangePage}>ConversationList</button>
      <h3>{userObj.displayName}'s Account</h3>
      <img src={userObj.photoURL} alt="userPhoto" />
      <form>
        <input type="text" ref={inputText} />
        <input type="submit" onClick={onSubmit} />
      </form>
      <UserList textStorage={textStorage} />
    </>
  );
};

export default Home;
