
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";

function cards(props) {
  return (
    <Container>
      <Row>
        <Col><h2>What We Offer</h2></Col>
      </Row>
      <Row>
        <Col className="text-center">
          <a className="nav-link js-scroll-trigger" href="#articles">
            <Image src="https://i.imgur.com/YnOCmYZ.png" className="Icon1" /></a>
          <p>Relevant Articles</p>
        </Col>
        <Col className="text-center">
          <a class="nav-link js-scroll-trigger" href="#resume">
            <Image src="https://i.imgur.com/eP7JxhI.png" className="Icon2" /></a>
          <p>Resources for generating your resume and what companies are looking for.</p>
        </Col>
        <Col className="text-center">
          <a class="nav-link js-scroll-trigger" href="#videos">
            <Image src="https://i.imgur.com/WFZkUuu.png" className="Icon3" /></a>
          <p>Videos for continued education.</p>
        </Col>
        <Col className="text-center">
          <a class="nav-link js-scroll-trigger" href="/">
            <Image src="https://i.imgur.com/K5qfgGN.png" className="Icon5" /></a>
          <p>Current job postings in your field.</p>
        </Col>
        <Col className="text-center">
          <a class="nav-link js-scroll-trigger" href="/portfolio">
            <Image src="https://i.imgur.com/tWIF949.png" className="Icon4" /></a>
          <p>Last but not least a secure profile for you to store all your relevant information.</p>
        </Col>
      </Row>

    </Container>


  )
}
export default cards;