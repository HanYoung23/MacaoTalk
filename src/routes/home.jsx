import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import UserList from "../components/userList";
import { fAuth, fStore } from "../fbase";

const Home = ({ userObj, isSignedOut }) => {
  const [readData, setReadData] = useState(null);
  let history = useHistory();
  const inputText = useRef();

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
    readDb();
  };

  const addFireStore = async (message) => {
    await fStore
      .collection("macaoTalk")
      .add({
        user: userObj.displayName,
        message,
      })
      .then(() => {})
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    inputText.current.value = "";
  };

  const readDb = async () => {
    await fStore
      .collection("macaoTalk")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          console.log("asd", doc);
          console.log(`${doc.id} => ${doc.data()}`);
          setReadData(doc.data());
        });
      });
  };

  return (
    <>
      <button onClick={onLogOut}>LogOut</button>
      <button onClick={onChangePage}>ConversationList</button>
      <h3>{userObj.displayName}'s Account</h3>
      <img src={userObj.photoURL} alt="userPhoto" />
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputText} />
        <input type="submit" value="확인" />
      </form>
      <UserList />
    </>
  );
};

export default Home;
