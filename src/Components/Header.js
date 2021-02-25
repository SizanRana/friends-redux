import { Avatar } from "@material-ui/core";
import React from "react";
import "../CSS/Header.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../firebase";

function Header({ userName, userPhoto }) {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.freelogodesign.org/file/app/client/thumb/53fc694f-849b-466a-adb2-97e0f6cebaa8_200x200.png?1596080141318"
          alt=""
        />
      </div>

      <div className="header__userName">
        <h2> Welcome {userName}</h2>
      </div>

      <div className="header__user">
        <div className="header__userInfo">
          <Avatar
            alt={userName}
            className="header__userAvatar"
            src={userPhoto}
          />
        </div>

        <div onClick={() => auth.signOut()} className="header__userOptions">
          <ExitToAppIcon className="header__userOptionsLogout" />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
