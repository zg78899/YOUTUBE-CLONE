import React from 'react';
import { Col, Row } from 'react-bootstrap';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';


import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import "./watchScreen.scss";

import { v4 as uuidv4 } from 'uuid';
import Comments from '../../components/comments/Comments';

function WatchScreen() {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe frameBorder="0" title="MY VIDEO"
          allowFullScreen
          width="100%"
          height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>

        </div>
        <VideoMetaData/>
        <Comments/>
      </Col>
      <Col lg={4}>
       {[...Array(10)].map(()=>(<VideoHorizontal key={uuidv4()}/>))}
      </Col>
      
    </Row>
  )

}
export default WatchScreen;