import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";

import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import "./watchScreen.scss";

import { v4 as uuidv4 } from "uuid";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoId } from "../../redux/actions/video.action";

function WatchScreen() {
  //id
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoId(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  console.log(video?.snippet);

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>loading...</h6>
        )}
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal key={uuidv4()} />
        ))}
      </Col>
    </Row>
  );
}
export default WatchScreen;
