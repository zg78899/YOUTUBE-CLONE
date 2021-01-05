import React from "react";
import "./_videoMetaData.scss";

import { MdThumbDown, MdThumbUp } from "react-icons/md";

import numeral from "numeral";
import moment from "moment";

import ShowMoreText from "react-show-more-text";

function VideoMetaData({ video: { snippet, statistics }, videoId }) {
  const {
    channelTitle,
    title,
    channelId,
    thumbnails: { medium },
    description,
    publishedAt,
  } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top ">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img className="rounder-circle mr-3" src={medium.url} alt="avartar" />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{numeral(10000).format("0.a")} 구독자</span>
          </div>
        </div>

        <button className="btn border-0 p-2 m-2">구독</button>
      </div>

      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="더보기"
          less="접기"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
}
export default VideoMetaData;
