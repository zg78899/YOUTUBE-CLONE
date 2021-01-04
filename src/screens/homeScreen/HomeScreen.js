import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import CateGoriesBar from '../../components/categoriesBar/CateGoriesBar'
import Video from '../../components/video/Video'
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';

import { getPopularVideos, getVideosByCateGories } from '../../redux/actions/video.action';
//infinite Scroll
import InfiniteScroll from 'react-infinite-scroll-component';
//Skeleton
import SkeletonVideo from '../../components/skeletons/SkeletonVideo';

export default function HomeScreen() {
const {videos,activeCategory,loading} = useSelector(state=> state.homeVideos);
const dispatch = useDispatch();

useEffect(()=>{
dispatch(getPopularVideos());
},[dispatch]);

const fetchData  =()=>{
if(activeCategory === 'All'){
  dispatch(getPopularVideos());
}else{
  dispatch(getVideosByCateGories(activeCategory));
}
 }

  return (
    <Container>
      <CateGoriesBar/>
        <InfiniteScroll
        className="row" 
        dataLength={videos.length}
        next={fetchData}
        hasMore={false}
        loader={
          <div className="spinner-border text-danger d-block mx-auto">
            
          </div>
        }>
        {!loading ? videos.map((video)=>(
          <Col key={uuidv4()} lg={3} md={4}> 
            <Video video={video} key={video.id}/>
          </Col> 
          )) : 
          
            [...Array(20)].map(()=>(
          <Col key={uuidv4()} lg={3} md={4}> 
            <SkeletonVideo/>
          </Col>
          
           ))}
         
      </InfiniteScroll> 
    </Container>
  )
}
 