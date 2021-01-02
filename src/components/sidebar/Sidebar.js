import React from 'react'
import "./_sidebar.scss";
import {
MdSubscriptions,
MdExitToApp,
MdThumbUp,
MdHistory,
MdLibraryBooks,
MdSentimentDissatisfied,
MdHome
} from 'react-icons/md';

export default function Sidebar({sidebar,handleToggleSidebar}) {
  return (
    <nav className={sidebar ? "sidebar open " : 'sidebar' }
    onClick={()=>handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23}/>
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Subscriptions</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>Like Videos</span>
      </li>

      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23}/>
        <span>library</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>i don't know</span>
      </li>

      <hr/>

      <li>
        <MdExitToApp size={23}/>
        <span>Log out</span>
      </li>

      <hr/>
      
    </nav>
  )
}
