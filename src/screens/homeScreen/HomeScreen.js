import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import CateGoriesBar from "../../components/categoriesBar/CateGoriesBar";
import Video from "../../components/video/Video";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";

import {
  getPopularVideos,
  getVideosByCateGories,
} from "../../redux/actions/video.action";
//infinite Scroll
import InfiniteScroll from "react-infinite-scroll-component";
//Skeleton
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";
import "./_homeScreen.scss";

export default function HomeScreen() {
  const [load, setLoad] = useState(false);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = (load) => {
    if (activeCategory === "All") {
      if (load) {
        setTimeout(() => {
          dispatch(getPopularVideos());
        }, 2000);
      }
    } else {
      if (load) {
        setTimeout(() => {
          dispatch(getVideosByCateGories(activeCategory));
        }, 2000);
      }
    }
  };

  return (
    <Container>
      <CateGoriesBar />
      <InfiniteScroll
        className="row"
        dataLength={videos.length}
        next={fetchData}
        hasMore={load}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        {!loading
          ? videos.map((video) => (
              <Col key={uuidv4()} lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col key={uuidv4()} lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
      <span
        className="comment__show-more d-flex justify-content-center align-items-center"
        onClick={() => setLoad((load) => !load)}
      >
        더보기
      </span>
    </Container>
  );
}
