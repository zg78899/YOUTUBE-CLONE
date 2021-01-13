import React, { useState } from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({ handleToggleSidebar }) {
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
  };

  return (
    <div className="border border-dark  header">
      <div className="header__main-logo">
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
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">
          <AiOutlineSearch size={23} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={user.photoURL} alt="avartar" />
      </div>
    </div>
  );
}
