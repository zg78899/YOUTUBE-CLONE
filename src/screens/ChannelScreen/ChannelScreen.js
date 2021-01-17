import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Video from "../../components/video/Video";
import { getChannelDetails } from "../../redux/actions/channel.action";
import { getVideosByChannel } from "../../redux/actions/video.action";
import numeral from "numeral";
import "./_channelScreen.scss";
import { Fragment } from "react";

function ChannelScreen() {
  const dispatch = useDispatch();
  const { channelId } = useParams();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  //채널 비디오
  const { videos, loading } = useSelector((state) => state.channelVideos);

  //채널 상세 정보
  const { snippet, statistics } = useSelector(
    (state) => state.channelDetails.channel
  );
  //구독 상태
  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  return (
    <Fragment>
      <div className="px-5 py-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center channelHeader__left">
          <img src={snippet?.thumbnails?.default?.url} alt="채널 아이콘" />
          <div className="ml-3 channelHeader__details">
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")} 구독자 수
            </span>
          </div>
        </div>
        <button
          className={`p-2 m-2 border-0 btn ${subscriptionStatus && "btn-gray"}`}
        >
          {subscriptionStatus ? "구독중" : "구독"}
        </button>
      </div>
      <Container>
        <Row className="mt-2">
          {!loading
            ? videos?.map((video) => (
                <Col md={3} lg={3}>
                  <Video video={video} channelScreen />
                </Col>
              ))
            : [...Array(15)].map(() => (
                <Col md={3} lg={3}>
                  <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="140px" count={20} />
                  </SkeletonTheme>
                </Col>
              ))}
        </Row>
      </Container>
    </Fragment>
  );
}
export default ChannelScreen;
