import React from "react";
import {Jumbotron,Container} from 'react-bootstrap';
import "./style.css";


function OurJumbotron(props){
  return(
  <Jumbotron fluid className="Jumbotron"> 
  <Container fluid className="Container">
    <h1>{props.title}</h1>
    <p>
      Look no further.
    </p>
  </Container>
</Jumbotron>
)
}

export default OurJumbotron;