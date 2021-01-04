import React from "react";
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

      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quasi
          quaerat mollitia nemo magni? Cupiditate accusantium, inventore
          consequatur veritatis fuga fugit incidunt eaque iste alias impedit.
          Ducimus quidem a dolores repudiandae magni, dolor magnam? Quos
          dignissimos sapiente inventore fuga in voluptates, laborum aliquam sed
          quaerat obcaecati omnis, minima error tempora quis veniam quia odit
          vitae pariatur ex! Dicta a non voluptas fugiat. At laudantium totam
          recusandae facere quidem architecto nihil deleniti incidunt, delectus
          laboriosam voluptates aliquam accusamus perspiciatis natus culpa.
          Corporis, repellat. Autem voluptate, unde tempore perspiciatis sunt,
          qui error consectetur accusantium numquam, minima temporibus
          distinctio. Illum officiis tempore hic?
        </ShowMoreText>
      </div>
    </div>
  );
}
export default VideoMetaData;
