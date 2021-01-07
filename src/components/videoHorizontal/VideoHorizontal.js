import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
// import request from "../../axios";s
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getRelatedVideoId } from "../../redux/actions/video.action";
import { channelDetailReducer } from "../../redux/reducers/channel.reducer";
import request from "../../axios";

//using react-bootstarp
function VideoHorizontal({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });

      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
      console.log("videoDetail", items[0]);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      console.log(items);
      setChannelIcon(items[0].snippet.thumbnails.default);
    };

    get_channel_icon();
  }, [channelId]);

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
          src={medium.url}
          alt="썸네일"
          effect="blur"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col className="videoHorizontal__right p-0" xs={6} md={8}>
        <p className="videoHorizontal__title mb-1">{title}</p>
        <div className="videoHorizontal_details">
          <AiFillEye /> {numeral(views).format("0.a")} Views •
          {moment(publishedAt).fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* TODO show in search screen */}
          {/* <LazyLoadImage src={channelId} effect="blur " /> */}
          <p>{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
}
export default VideoHorizontal;
