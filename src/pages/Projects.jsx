import React from 'react'
import '../Styles/projects.css';
import image from '../img/image.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const projects = () => {
  return (
    <div className='project-page'>
      <p>MY WORK</p>
      <h1>RECENT PROJECT</h1>

      <Row className="main">
  <Col xs={12} sm={6} md={4} className="contennt">
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Button variant="primary">→</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} sm={6} md={4} className="contennt">
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Button variant="primary">→</Button>
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} sm={6} md={4} className="contennt">
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Button variant="primary">→</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>



    </div>
  )
}

export default projects
