import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CateGoriesBar from '../../components/categoriesBar/CateGoriesBar'
import Video from '../../components/video/Video'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from '../../redux/actions/video.action';

export default function HomeScreen() {
const dispatch = useDispatch();

useEffect(()=>{
dispatch(getPopularVideos());
},[dispatch]);


const {videos} = useSelector(state=> state.homeVideos);


 
  return (
    <Container>
      <CateGoriesBar/>
      <Row>
        {
          videos.map((video)=>(
          <Col key={uuidv4()} lg={3} md={4}> 
            <Video video={video} key={video.id}/>
          </Col>
          ))
        }
      </Row>
    </Container>
  )
}
 