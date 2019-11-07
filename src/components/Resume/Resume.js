import React from "react";
import {Card,Nav,Button,Col,Row,Container,Accordion} from "react-bootstrap";
import "./Resume.css"

function Resume(props){
  return (
    <div><h3 className="HeaderRes fluid">Resume Helper</h3>

<Container>
  <Row>
    <Col> <Accordion className="Accordion fluid">
  <Card>
  <Card.Header className="CardHeader4 fluid">
    <Accordion.Toggle style={{color:"white"}} as={Button} variant="link" eventKey="0" className="Button0 fluid">
      Resume Templates
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Card.Body className="CardBody0 fluid">
    <ul>
  <li><a href="https://novoresume.com/resume-templates">Novorésumé</a>
  <button>Save</button></li>
  <li><a href="https://www.resume-now.com/templates">Resume-Now</a>
  <button>Save</button></li>
  <li><a href="https://www.indeed.com/profile/resume-templates">indeed</a>
  <button>Save</button></li>
</ul>  
    </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  </Col>

    <Col>
    <Accordion>
  <Card>
  <Card.Header className="CardHeader5 fluid">
  <Accordion.Toggle style={{color:'white'}} as={Button} variant="link" eventKey="1" className="Button1 fluid">
  Example Resumes
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
    <Card.Body className="CardBody1 fluid">
    <ul>
  <li><a href="https://resumes.indeed.com/?co=US&hl=en">indeed</a>
  <button>Save</button></li>
  <li><a href="https://www.monster.com/career-advice/article/software-developer-resume-sample">Monster</a>
  <button>Save</button></li>
  <li><a href="https://zety.com/blog/web-developer-resume">zety</a>
  <button>Save</button></li>
   </ul> 
    </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
    </Col>
<Col>
<Accordion>
  <Card>
  <Card.Header className="CardHeader6 fluid">
  <Accordion.Toggle style={{color:'white'}} as={Button} variant="link" eventKey="2" className="Button3 fluid">
  Resume Builders
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
    <Card.Body className="CardBody2 fluid">
      <ul>
  <li><a href="https://resumegenius.com/">Resume Genius</a>
  <button>Save</button></li>
  <li><a href="https://www.myperfectresume.com/">My Perfect Resume</a>
  <button>Save</button></li>
  <li><a href="https://www.canva.com/create/resumes/">Canva</a>
  <button>Save</button></li>
</ul>     </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
    </Col>
  </Row>
</Container>
</div>

  )
}

export default Resume;