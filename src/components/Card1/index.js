
import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import "./style.css";

function cards(props) {
  return (
    <Container>
  <Row>
    <Col><h2>What We Offer</h2></Col>
  </Row>
  <Row>
    <Col className="text-center"
     ><a href="/">
  <Image src="https://i.imgur.com/YnOCmYZ.png" className="Icon1"  /></a>
  <br></br>
  <p>Relevant Articles </p> </Col>
    <Col className="text-center"
     > <a href="/">
  <Image src="https://i.imgur.com/eP7JxhI.png" className="Icon2"  /></a>
  <br></br>
  <p>Resources for generating your resume and what companies are looking for. </p> 
  </Col>
    <Col className="text-center"
     ><a href="/">
  <Image src="https://i.imgur.com/WFZkUuu.png" className="Icon3" /></a>
  <br></br>
  <p>Videos for continued education.</p> 
  </Col>
  <Col className="text-center"
     ><a href="/">
  <Image src="https://i.imgur.com/K5qfgGN.png" className="Icon5" /></a>
  <br></br>
  <p>Current job postings in your field.</p>
  </Col>
  <Col className="text-center"
     ><a href="/">
  <Image src="https://i.imgur.com/tWIF949.png" className="Icon6" /></a>
  <br></br>
  <p>Last but not least a secure profile for you to store all your relevant information.</p>
  </Col>
  </Row>

</Container>






    // <Card fluid className="Card">
    //   <Card.Header fluid className="Card.Header">Our Mission Statement</Card.Header>
    //   <Card.Body>
    //     <blockquote className="blockquote mb-0">
    //       <p>
    //         {' '}
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //     {' '}
    //       </p>
    //       <footer className="blockquote-footer">
    //         Someone famous in <cite title="Source Title">Source Title</cite>
    //       </footer>
    //     </blockquote>
    //   </Card.Body>
    // </Card>
  )
}
export default cards;