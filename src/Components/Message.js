import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import "../CSS/Message.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Message = forwardRef(
  (
    { key, contents: { timestamp, username, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message  ${user.email === email && "message__sender"}`}
      >
        <Avatar className="message__photo" src={photo} />
        <p className="message__chat">
          <span className="message__chatName">{username}</span>
          {message}
          <small className="message__chatTimestamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </small>
        </p>
      </div>
    );
  }
);

export default Message;
