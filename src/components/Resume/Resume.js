import React from "react";
<<<<<<< HEAD
import {Card,Nav,Button,Col,Row,Container,ListGroup,ListGroupItem} from "react-bootstrap";
import "./Resume.css";
import axios from "axios";
=======
import {Card,Nav,Button,Col,Row,Container,Accordion} from "react-bootstrap";
import "./Resume.css"
>>>>>>> a664fbf2cb96daec44535b1354706886569f1d22

class Resume extends React.Component{

  saveResume=(newResume)=>{
    axios.post(`http://localhost:3030/api/portfolio/resume`,{newResume},{withCredentials:true}).then(response=>console.log(response))
  }
  render() {
    return (
    <div><h3 id="resume" className="HeaderRes fluid">Resume Helper</h3>

<Container>
  <Row>
<<<<<<< HEAD
    <Col><Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Resume Templates</Card.Title>
    <Card.Text>
      Here are some sites that give you templates to create your perfect job ready resume.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><a href="https://novoresume.com/resume-templates">Novorésumé</a>
    <button onClick={()=>this.saveResume({url:"https://novoresume.com/resume-templates", title:"Novorésumé"})}>Save</button>
    </ListGroupItem>
    <ListGroupItem><a href="https://www.resume-now.com/templates">Resume-Now</a>
    <button onClick={()=>this.saveResume({url:"https://www.resume-now.com/templates", title:"Resume-Now"})}>Save</button>
    </ListGroupItem>
    <ListGroupItem><a href="https://www.indeed.com/profile/resume-templates">Indeed</a>
    <button onClick={()=>this.saveResume({url:"https://www.indeed.com/profile/resume-templates", title:"Indeed"})}>Save</button>
    </ListGroupItem>
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
    <ListGroupItem><a href="https://zety.com/blog/web-developer-resume">Zety</a>
    <button onClick={()=>this.saveResume({url:"https://zety.com/blog/web-developer-resume", title:"Zety"})}>Save</button>
    </ListGroupItem>
    <ListGroupItem><a href="https://resumes.indeed.com/?co=US&hl=en">Indeed</a>
    <button onClick={()=>this.saveResume({url:"https://resumes.indeed.com/?co=US&hl=en", title:"Indeed"})}>Save</button>
    </ListGroupItem>
    <ListGroupItem><a href="https://www.monster.com/career-advice/article/software-developer-resume-sample">Monster</a>
    <button onClick={()=>this.saveResume({url:"https://www.monster.com/career-advice/article/software-developer-resume-sample", title:"Monster"})}>Save</button>
    </ListGroupItem>
    
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
    <ListGroupItem><a href="https://resumegenius.com/">Resume Genius</a>
    <button onClick={()=>this.saveResume({url:"https://resumegenius.com/", title:"Resume Genius"})}>Save</button>
    </ListGroupItem>
    <ListGroupItem><a href="https://www.myperfectresume.com/">My Perfect Resume</a>
    <button onClick={()=>this.saveResume({url:"https://www.myperfectresume.com/", title:"My Perfect Resume"})}>Save</button>
    </ListGroupItem>
    <ListGroupItem><a href="https://www.canva.com/create/resumes/">Canva</a>
    <button onClick={()=>this.saveResume({url:"https://www.canva.com/create/resumes/", title:"Canva"})}>Save</button>
    </ListGroupItem>
  </ListGroup>

</Card></Col>
  </Row>
</Container>
</div>
)}
=======
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
>>>>>>> a664fbf2cb96daec44535b1354706886569f1d22
}

export default Resume;