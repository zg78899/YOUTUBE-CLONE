import React, { useState } from "react";
import "./_videoMetaData.scss";

import { MdThumbDown, MdThumbUp } from "react-icons/md";

import numeral from "numeral";
import moment from "moment";

import ShowMoreText from "react-show-more-text";

function VideoMetaData() {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top ">
        <h5>video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(10000).format("0.a")} Views •
            {moment("2021-01-04").fromNow()}
          </span>
          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(10000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            className="rounder-circle mr-3"
            src="/avartar.png"
            alt="avartar"
          />
          <div className="d-flex flex-column">
            <span>Kim Jae Hun</span>
            <span>{numeral(10000).format("0.a")} Views •</span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>

      <div className="videoMetaData__description"></div>
    </div>
  );
}
export default VideoMetaData;
