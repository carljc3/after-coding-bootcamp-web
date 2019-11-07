import React from "react";
import {Card,Nav,Button,Col,Row,Container,ListGroup,ListGroupItem} from "react-bootstrap";
import "./Resume.css"

function Resume(props){
  return (

    <div><h3 id="resume" className="HeaderRes fluid">Resume Helper</h3>
<Container>
  <Row>
    <Col><Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Resume Templates</Card.Title>
    <Card.Text>
      Here are some sites that give you templates to create your perfect job ready resume.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><a href="https://novoresume.com/resume-templates">Novorésumé</a></ListGroupItem>
    <ListGroupItem><a href="https://www.resume-now.com/templates">Resume-Now</a></ListGroupItem>
    <ListGroupItem><a href="https://www.indeed.com/profile/resume-templates">indeed</a></ListGroupItem>
  </ListGroup>

</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Example Resumes</Card.Title>
    <Card.Text>
      Look at these examples below to get an idea of what a hirable candidate looks like.
    </Card.Text>
  </Card.Body>

  <ListGroup className="list-group-flush">
    <ListGroupItem><a href="https://resumes.indeed.com/?co=US&hl=en">indeed</a></ListGroupItem>
    <ListGroupItem><a href="https://www.monster.com/career-advice/article/software-developer-resume-sample">Monster</a></ListGroupItem>
    <ListGroupItem><a href="https://zety.com/blog/web-developer-resume">zety</a></ListGroupItem>
  </ListGroup>

</Card></Col>
    <Col><Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Resume Builders</Card.Title>
    <Card.Text>
     Build your developer resume through the helpful sites!<br></br>
    </Card.Text>
  </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem><a href="https://resumegenius.com/">Resume Genius</a></ListGroupItem>
    <ListGroupItem><a href="https://www.myperfectresume.com/">My Perfect Resume</a></ListGroupItem>
    <ListGroupItem><a href="https://www.canva.com/create/resumes/">Canva</a></ListGroupItem>
  </ListGroup>

</Card></Col>
  </Row>
</Container>
</div>


  )
}

export default Resume;