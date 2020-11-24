import React, { useState } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { fData } from "../fbase";

const Home = ({ userInfo }) => {
  const [message, setMessage] = useState("");
  let history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
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

  // const writeUserData = (userInfo) => {
  //   console.log(userInfo);
  //   firebase
  //     .database()
  //     .ref("users/" + userId)
  //     .set({
  //       username: name,
  //       email: email,
  //       profile_picture: imageUrl,
  //     });
  // };

  return (
    <>
      <button onClick={onClick}>Log Out</button>
      <h1>home</h1>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <input type="submit" />
      </form>

      <button>realtime db</button>
    </>
  );
};

export default Home;
