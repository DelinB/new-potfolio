import React from 'react'
import '../Styles/exp.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Experiance = () => {
  return (
    <div className='experiance'>
      <p className='firstst-p'>
      EXPERIANCE
      </p>
      <h1>MY WORK EXPERIANCE</h1>
      <div>
      <>
      <div className='contennt'>
        {/* <Card style={{ width: '474px',height:'573px' }} className='cardcontennt1'>
          <Card className='cardcontennt2' style={{ width: '423px',height:'100px' }} >
          <Card.Body>
        <Card.Title>Front-end Developer</Card.Title>
      </Card.Body>
          </Card>
      <Card.Body>
        
        {/* <h1>About Company</h1>
        <br/>
        <p>Nagercoil | FULL TIME</p>
        <p>JAN 2020 - PRESENT</p>
        <p>FULL TIME</p> */}
        {/* <Card.Title>About Company</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card> */} 
    <Card className='myexperiance'>
      <div className='experience'>
        <h2 className='role'>Front-end Developer</h2>
        <h6 className='work'>WELAB | REMOTE</h6>
        <h6 >JAN 2019 - PRESENT</h6>
        <h6 className='time'>Full time</h6>

      </div>
      <div className='about'>
        <h2 className='company-about'>About Company   </h2>
        <h6 className='contents'>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation .</h6>
      </div>
    </Card>
    </div>
      </>

      </div>
    </div>
  )
}

export default Experiance