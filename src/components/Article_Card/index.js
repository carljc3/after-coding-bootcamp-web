import React from "react";
import {Card , ListGroup} from "react-bootstrap";
import "./index.css"

function ArticleCard(props){
  return (

<Card style={{ width: '18rem' }}>
  <Card.Header fluid className= "CardHeader" >Articles</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>


  )
}

export default ArticleCard;