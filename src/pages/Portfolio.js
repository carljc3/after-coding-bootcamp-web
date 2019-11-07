import React, { Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button, Container, Col, Row } from 'react-bootstrap'
import "../styles/Portfolio.css"
import API from '../components/utils/API.js'
import JobCard from "../components/JobCard"
import ArtCard from "../components/ArtCard"
import VideoCard from "../components/VideoCard"
import ResumeCard from "../components/ResumeCard"

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
                <ListGroupItem>{this.state.user.bootcamp}</ListGroupItem>
                <ListGroupItem>{this.state.user.review}</ListGroupItem>
                <ListGroupItem>{this.state.user.rating}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <a href="/"><Button fluid className="HomeButton" variant="light">Home</Button></a>
                <a href="logout"><Button variant="secondary" >Sign Out</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card>
    <Card.Img variant="top" src="https://picsum.photos/50/50/?blur" />
    <Card.Body>
    <Card.Title>Saved Jobs</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="secondary" >Unsave</Button>
    </Card.Body>
  </Card>
          </Col>
          <Col>
          <Card>
    <Card.Img variant="top" src="https://picsum.photos/50/50/?blur" />
    <Card.Body>
    <Card.Title>Saved Articles</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="secondary" >Unsave</Button>
    </Card.Body>
  </Card>
          </Col>
          <Col>
          <Card>
    <Card.Img variant="top" src="https://picsum.photos/50/50/?blur" />
    <Card.Body>
    <Card.Title>Saved Resumes</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="secondary" >Unsave</Button>
    </Card.Body>
  </Card>
          </Col>
          <Col>
          <Card>
    <Card.Img variant="top" src="https://picsum.photos/50/50/?blur" />
    <Card.Body>
    <Card.Title>Saved Videos</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="secondary" >Unsave</Button>
    </Card.Body>
  </Card>
  {this.state.user.savedJobs && this.state.user.savedJobs.map(job=>{
    return <JobCard job={job}/>
    })
}

  {this.state.user.favoriteArticles && this.state.user.favoriteArticles.map(article=>{
    return <ArtCard article={article}/>
    })
}

  {this.state.user.favoriteVideos && this.state.user.favoriteVideos.map(video=>{
    return <VideoCard video={video}/>
    })
}

  {this.state.user.favoriteResumes && this.state.user.favoriteResumes.map(resume=>{
    return <ResumeCard resume={resume}/>
    })
}
          </Col>
        </Row>
      </Container>

  
    )
  }
}
