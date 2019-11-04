import React from "react";
import {Jumbotron,Container} from "react-bootstrap";
import "./index.css"

function ArticleCard(props){
  return (
    <Jumbotron  className="Jumbotron2 fluid"> 
    <Container  className="Container fluid">
    {/* <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p> */}
  </Container>
</Jumbotron>




  )
}

export default ArticleCard;