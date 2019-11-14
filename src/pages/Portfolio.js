import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button, Container, Col, Row } from 'react-bootstrap'
import "../styles/Portfolio.css"
import API from '../components/utils/API.js'
import JobCard from "../components/JobCard"
import ArtCard from "../components/ArtCard"
import VideoCard from "../components/VideoCard"
import ResumeCard from "../components/ResumeCard"

export default class Portfolio extends Component {
  state = {
    user: {
      username: "Please sign in."
    }
  }


  componentDidMount() {
    API.getLoggedInUser().then(res => {
      console.log('getLoggedInUser', res.data)
      this.setState({ user: res.data })
    }).catch(err => {
      console.log(err.response)
    })
  }

  render() {
    return (
<Container>
      <Row>
      <Col xs={6}>
      <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png" />
             <Card.Body>
               <Card.Title>{this.state.user.username}</Card.Title>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroupItem>Goal:{this.state.user.bootcamp}</ListGroupItem>
               {/* <ListGroupItem>{this.state.user.review}</ListGroupItem>
               <ListGroupItem>{this.state.user.rating}</ListGroupItem> */}
             </ListGroup>
             <Card.Body>
               <a href="/"><Button fluid className="HomeButton" variant="light">Home</Button></a>
               <a href="logout"><Button variant="secondary" >Sign Out</Button></a>
             </Card.Body>
            </Card>

      </Col>

      <Col xs={6}>
      <Card>
    <Card.Img variant="top" src="https://i.imgur.com/W4vJPym.png" />
    <Card.Body>
    <Card.Title>Saved Jobs:</Card.Title><br></br>
      <Card.Text>
    {this.state.user.savedJobs && this.state.user.savedJobs.map(job=>{
    return <JobCard job={job}/>
    })
}
</Card.Text>
      <Button variant="secondary" >Unsave</Button>
    </Card.Body>
  </Card>

<Card>
  <Card.Body>
  <Card.Title>Saved Articles:</Card.Title><br></br>
      <Card.Text>
     {this.state.user.favoriteArticles && this.state.user.favoriteArticles.map(article=>{
    return <ArtCard article={article}/>
    })
}
      </Card.Text>
      <Button variant="secondary" >Unsave</Button>
</Card.Body>
</Card>
<Card>
  <Card.Body>
    <Card.Title>Saved Resumes:</Card.Title><br></br>
     <Card.Text>
     {this.state.user.favoriteResumes && this.state.user.favoriteResumes.map(resume=>{
    return <ResumeCard resume={resume}/>
    })
}
      </Card.Text>
      <Button variant="secondary" >Unsave</Button>
  </Card.Body>
</Card>

      </Col>
     
    </Row>
  </Container>

     
    
    )
  }
}
