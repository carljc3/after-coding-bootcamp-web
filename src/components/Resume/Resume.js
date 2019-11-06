import React from "react";
import {Card,Nav,Button} from "react-bootstrap";
import "./Resume.css"

function Resume(props){
  return (
    <div><h3 className="HeaderRes fluid" id="resume">Resume Helper</h3>
    <Card className="CardRes fluid">
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Templates</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Example Resumes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">
          Resume Builders
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>




  )
}

export default Resume;