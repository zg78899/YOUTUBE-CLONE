import React from 'react'
import "./_header.scss";

import {FaBar, FaBars} from 'react-icons/fa';
import {AiFillQqCircle, AiOutlineSearch} from 'react-icons/ai';
import {MdNotifications, MdApps} from 'react-icons/md';



export default function Header({handleToggleSidebar}) {
  return (
    <div className="border border-dark header">
        <FaBars className="header__menu"
        size={26}
        onClick={()=>handleToggleSidebar()}
        />
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
         alt="youtute-logo"
        className="header__logo"/>
        <h1>KIM TUBE</h1>
        <form >
          <input type="text" placeholder="Search"/>
          <button type="submit">
            <AiOutlineSearch size={23}/>
          </button>
        </form>
        <div className="header__icons">
          <MdNotifications size={28}/>
          <MdApps size={28}/>
          <img src="/avartar.png" alt="avartar"/>

        </div>
    </div>
  )
}
