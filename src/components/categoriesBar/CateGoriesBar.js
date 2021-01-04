import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./_categoriesBar.scss";
import {
  getPopularVideos,
  getVideosByCateGories,
} from "../../redux/actions/video.action";

const keywords = [
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
];

export default function CateGoriesBar() {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCateGories(value));
    }
  };
  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          className={activeElement === value ? "active " : ""}
          onClick={() => handleClick(value)}
          key={i}
        >
          {value}
        </span>
      ))}
    </div>
  );
}
