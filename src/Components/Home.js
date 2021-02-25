import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Avatar,
} from "@material-ui/core";
import Message from "./Message";
import db from "../firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Header from "./Header";

function Home() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  //useState = variable in REACT
  //useEffect = run code on a conditio  in REACT

  useEffect(() => {
    //run once when app component is loading
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    //all the logic to send the messages

    db.collection("messages").add({
      message: input,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
      photo: user.photo,
      email: user.email,
    });
    setInput("");
  };

  return (
    <div className="App">
      <Header userName={user.displayName} userPhoto={user.photo} />

      {/* <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form> */}

      <div className="chat__messages">
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} contents={message} />
          ))}
        </FlipMove>
      </div>

      <div className="chat__input">
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a message..."
          />
          <button type="submit" onClick={sendMessage}>
            SendMessage
          </button>
        </form>
        <IconButton>
          <SendIcon onClick={sendMessage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Home;

// This is friends logo url
// https://www.freelogodesign.org/file/app/client/thumb/53fc694f-849b-466a-adb2-97e0f6cebaa8_200x200.png?1596080141318
