import React, { useEffect } from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";

export default function Header({ handleToggleSidebar }) {
  const history = useHistory();

  return (
    <div className="border border-dark  header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />
      <img
        onClick={() => history.push("/")}
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="youtute-logo"
        className="header__logo"
      />
      <h1 onClick={() => history.push("/")}>KIM TUBE</h1>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={23} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="/avartar.png" alt="avartar" />
      </div>
    </div>
  );
}
