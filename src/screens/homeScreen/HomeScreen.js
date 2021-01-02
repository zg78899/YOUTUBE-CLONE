import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CateGoriesBar from '../../components/categoriesBar/CateGoriesBar'
import Video from '../../components/video/Video'
import { v4 as uuidv4 } from 'uuid';

export default function HomeScreen() {
  return (
    <Container>
      <CateGoriesBar/>
      <Row>
        {
          [...new Array(20)].map(()=>(
          <Col key={uuidv4()} lg={3} md={4}> 
            <Video/>
          </Col>
          ))
        }
      </Row>
    </Container>
  )
}
 