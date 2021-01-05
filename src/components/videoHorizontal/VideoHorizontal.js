import React from "react";
import "./_videoHorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
// import request from "../../axios";s
import { Col, Row } from "react-bootstrap";

//using react-bootstarp
function VideoHorizontal() {
  const seconds = moment.duration(1000).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
          src="/avartar.png"
          alt="썸네일"
          effect="blur"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col className="videoHorizontal__right p-0" xs={6} md={8}>
        <p className="videoHorizontal__title mb-1">
          Be a full stack developer in 1 month
        </p>
        <div className="videoHorizontal_details">
          <AiFillEye /> {numeral(10000).format("0.a")} Views •
          {moment("2021-01-04").fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {/* <LazyLoadImage src="/avartar.png" effect="blur " /> */}
          <p>KIM JAE HUN</p>
        </div>
      </Col>
    </Row>
  );
}
export default VideoHorizontal;
