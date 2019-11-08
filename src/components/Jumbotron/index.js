import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import "./style.css";


function OurJumbotron(props) {
  return (
    <Jumbotron className="Jumbotron fluid">
      <Container className="Container fluid">
        {/* <h1>{props.title}</h1>
    <p>
      Look no further.
    </p> */}
      </Container>
    </Jumbotron>
  )
}

export default OurJumbotron;