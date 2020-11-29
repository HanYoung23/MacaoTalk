import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import UserList from "../components/userList";

const Home = ({ userObj }) => {
  let history = useHistory();

  const onLogOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const onChangePage = () => {
    history.push("conversation");
  };

  return (
    <>
      <button onClick={onLogOut}>LogOut</button>
      <button onClick={onChangePage}>ConversationList</button>
      <h3>{userObj.displayName}'s Account</h3>
      <img src={userObj.photoURL} alt="userPhoto" />
      <UserList />
    </>
  );
};

export default Home;
