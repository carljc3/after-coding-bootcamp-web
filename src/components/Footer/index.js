import React from "react";
import {Card,Col,Row,Container} from "react-bootstrap";
import "./index.css"

function Footer(props){
  return (
    <Card>
    <Card.Header className="FooterHead"></Card.Header>
    <Card.Body className= "CardBodyFooter">
    <Container>
  <Row>
    <Col>About Us<br></br><p className="Ptag">After Coding Bootcamp is a resource application for developers coming out of coding boot camp. Made by developers for developers.</p></Col>
    <Col><img className="FooterImg" src ="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b2dae474200703.5c261a173e807.png"></img><br></br><p className="PtagACBC">Copyright ACBC 2019</p></Col>
    <Col>Contact Us<br></br>
    
      <button className="ContactButtons">J-Anne</button><br></br>
      
      <button className="ContactButtons">Amberlee Ha</button><br></br>
      
      <button className="ContactButtons">Theresa Aguilar</button><br></br>
  
    
    </Col>
  </Row>
</Container>
    </Card.Body>
  </Card>




  )
}

export default Footer;