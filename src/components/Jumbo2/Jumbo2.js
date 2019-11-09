import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import "./jumbo.css";


function JumboTwo(props) {
  return (
    <Jumbotron className="JumboTwo fluid">
      <Container className="Container fluid">
        {<img className="LargeImg fluid" src="https://image.freepik.com/free-vector/online-news_41910-185.jpg"></img>}
      </Container>
    </Jumbotron>
  )
}

export default JumboTwo;