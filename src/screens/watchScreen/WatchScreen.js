import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";

import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import "./watchScreen.scss";

import { v4 as uuidv4 } from "uuid";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedVideoId,
  getVideoId,
} from "../../redux/actions/video.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function WatchScreen() {
  //id
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoId(id));

    dispatch(getRelatedVideoId(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  const { videos, loading: realtedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );

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
        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!realtedVideosLoading ? (
          videos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
}
export default WatchScreen;
