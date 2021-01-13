import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdSentimentDissatisfied,
  MdHome,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link, useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";

export default function Sidebar({ sidebar, handleToggleSidebar }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(log_out());
  };
  return (
    <nav
      className={sidebar ? "sidebar open " : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <ReactTooltip
        className="toltip"
        place="right"
        type="light"
        effect="float"
      />
      <li data-tip="Home" onClick={() => history.push("/")}>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <Link to="/feed/subscriptions">
        <li data-tip="Subscriptions">
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>
      <li data-tip="Like Videos">
        <MdThumbUp size={23} />
        <span>Like Videos</span>
      </li>

      <li data-tip="History ">
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li data-tip="Library">
        <MdLibraryBooks size={23} />
        <span>library</span>
      </li>

      <li data-tip="I Dont Like">
        <MdSentimentDissatisfied size={23} />
        <span>i don't know</span>
      </li>

      <hr />

      <li data-tip="Log out" onClick={handleLogout}>
        <MdExitToApp size={23} />
        <span>Log out</span>
      </li>

      <hr />
    </nav>
  );
}
