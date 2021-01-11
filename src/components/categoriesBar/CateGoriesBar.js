import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./_categoriesBar.scss";
import {
  getPopularVideos,
  getVideosByCateGories,
} from "../../redux/actions/video.action";

import { BsFillDashCircleFill } from "react-icons/bs";
import { BiMessageAltAdd, BiMessageAltMinus } from "react-icons/bi";
import { BsPlusCircle } from "react-icons/bs";

export default function CateGoriesBar() {
  const [keywords, setKeywords] = useState([
    "All",
    "React js",
    "Anglar js",
    "use of API",
    "Redux",
    "Music",
    "Algorism Art",
    "Guitar",
    "Coding",
    "Football",
    "Spurs",
    "Gatsby",
    "Hapoy Life",
    "kim jae hun",
    "South Korea",
    "Web Front End engineer",
    "JavaScript",
    "HTML5",
    "CSS3",
    "react-redux",
    "React Router",
    "programmer",
    "game",
    "Open Source",
  ]);

  const [activeElement, setActiveElement] = useState("All");

  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCateGories(value));
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") return;
    setKeywords(keywords.concat(text));
    setText("");
    setShow(false);
  };

  const removeCategory = (i) => {
    setKeywords(keywords.filter((value, index) => index !== i));
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button className="category-add" onClick={() => setShow(!show)}>
          {show ? <BiMessageAltMinus /> : <BiMessageAltAdd />}
          {show ? "취소" : "카테고리 추가"}
        </button>
        {show && (
          <form className="category-form" onSubmit={handleSubmit}>
            <input
              value={text}
              onChange={handleChange}
              placeholder="카테고리를 입력하세요"
              type="text"
            />
            <button type="submit">
              <BsPlusCircle />
            </button>
          </form>
        )}
      </div>
      <div className="categoriesBar">
        {[...keywords].map((value, i) => (
          <span
            className={`category-value ${
              activeElement === value ? "active " : ""
            }`}
            onClick={() => handleClick(value)}
            key={i}
          >
            {value}
            <BsFillDashCircleFill
              className="category-remove"
              onClick={() => removeCategory(i)}
            ></BsFillDashCircleFill>
          </span>
        ))}
      </div>
    </div>
  );
}
