import React from "react";
import {Card,Col,Row,Container,Image} from "react-bootstrap";
import "./index.css"

function Footer(props){
  return (
    <Card>
    <Card.Header className="FooterHead"></Card.Header>
    <Card.Body className= "CardBodyFooter">
    <Container>
  <Row>
    <Col>About Us<br></br>
    <Image src="https://i.imgur.com/8UiZtHu.png" className="Picture1" />
    <p className="Ptag">After Coding Bootcamp is a resource application for developers coming out of a coding boot camp. Made by developers for developers.</p></Col>
    <Col><img className="FooterImg" src ="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b2dae474200703.5c261a173e807.png"></img><br></br><p className="PtagACBC">Copyright ACBC 2019</p></Col>
    <Col>Contact Us<br></br>    
<ul>
  <li><p className="Text" >J-Anne Carlson</p>
    <a href="https://github.com/carljc3">
    <Image src="https://i.imgur.com/hzMGiSY.png" className="Icon10" /></a>
    <a href="https://www.linkedin.com/in/jay-carlson-24998271/">
    <Image src="https://i.imgur.com/kuCryHG.png" className="Icon11" /></a></li>
  
  
  <li> <p className="Text" >Amberlee Ha</p>
      <a href="">
    <Image src="https://i.imgur.com/hzMGiSY.png" className="Icon10" /></a>
    <a href="https://www.linkedin.com/in/amberlee-al-ha/">
    <Image src="https://i.imgur.com/kuCryHG.png" className="Icon11" /></a></li>
  
  
  <li>  <p className="Text" >Theresa Aguilar</p>
      <a href="https://github.com/raselberg">
    <Image src="https://i.imgur.com/hzMGiSY.png" className="Icon10" /></a>
    <a href="https://www.linkedin.com/in/theresa-aguilar-676611196/">
    <Image src="https://i.imgur.com/kuCryHG.png" className="Icon11" /></a></li>
</ul>


    </Col>
  </Row>
</Container>
    </Card.Body>
  </Card>




  )
}

export default Footer;