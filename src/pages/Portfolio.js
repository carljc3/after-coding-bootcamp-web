import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button, Container, Col, Row } from 'react-bootstrap'
import "../styles/Portfolio.css"
import API from '../components/utils/API.js'

export default class Portfolio extends Component {
  state={
    user:{
      username:"fakename"
    }
  }

  componentDidMount(){
    API.getLoggedInUser().then(res=>{
      console.log(res.data)
      this.setState({user:res.data})
    }).catch(err=>{
      console.log(err.response)
    })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png" />
              <Card.Body>
                <Card.Title>{this.state.user.username}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Job:</ListGroupItem>
                <ListGroupItem>Education:</ListGroupItem>
                <ListGroupItem>Goals:</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button fluid className="HomeButton" variant="light">Home</Button>
                <Button variant="secondary" >Sign Out</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
          </Col>
        </Row>
      </Container>

  
    )
  }
}
