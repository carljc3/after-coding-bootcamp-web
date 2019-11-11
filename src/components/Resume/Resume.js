import React from "react";
import { Card, Nav, Button, Col, Row, Container, Accordion } from "react-bootstrap";
import "./Resume.css";
import axios from "axios";

class Resume extends React.Component {

  saveResume = (newResume) => {
    axios.post(`http://localhost:3030/api/portfolio/resume`, { newResume }, { withCredentials: true }).then(response => console.log(response))
  }
  render() {
    return (

      <div>
        <h3 id="resume" className="HeaderRes fluid">Resume Helper</h3>

        <Container>
          <Row>
            <Col>
              <Accordion className="Accordion fluid">
                <Card>
                  <Card.Header className="CardHeader4 fluid">
                    <Accordion.Toggle style={{ color: "white" }} as={Button} variant="link" eventKey="0" className="Button00 fluid">
                      Resume Templates
                </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="CardBody0 fluid">
                      <ul>
                        <li><a href="https://novoresume.com/resume-templates">Novorésumé</a></li>
                        <button onClick={() => this.saveResume({ url: "https://novoresume.com/resume-templates", title: "Novorésumé" })}>Save</button>
                        <li><a href="https://www.resume-now.com/templates">Resume-Now</a></li>
                        <button onClick={() => this.saveResume({ url: "https://www.resume-now.com/templates", title: "Resume-Now" })}>Save</button>
                        <li><a href="https://www.indeed.com/profile/resume-templates">indeed</a></li>
                        <button onClick={() => this.saveResume({ url: "https://www.indeed.com/profile/resume-templates", title: "Indeed" })}>Save</button>
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
                    <Accordion.Toggle style={{ color: 'white' }} as={Button} variant="link" eventKey="1" className="Button11 fluid">
                      Example Resumes
                  </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="CardBody1 fluid">
                      <ul>
                        <li><a href="https://resumes.indeed.com/?co=US&hl=en">indeed</a></li>
                        <button onClick={() => this.saveResume({ url: "https://resumes.indeed.com/?co=US&hl=en", title: "Indeed" })}>Save</button>
                        <li><a href="https://www.monster.com/career-advice/article/software-developer-resume-sample">Monster</a></li>
                        <button onClick={() => this.saveResume({ url: "https://www.monster.com/career-advice/article/software-developer-resume-sample", title: "Monster" })}>Save</button>
                        <li><a href="https://zety.com/blog/web-developer-resume">zety</a></li>
                        <button onClick={() => this.saveResume({ url: "https://zety.com/blog/web-developer-resume", title: "Zety" })}>Save</button>
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
                    <Accordion.Toggle style={{ color: 'white' }} as={Button} variant="link" eventKey="2" className="Button33 fluid">
                      Resume Builders
                  </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body className="CardBody2 fluid">
                      <ul>
                        <li><a href="https://resumegenius.com/">Resume Genius</a></li>
                        <button onClick={() => this.saveResume({ url: "https://resumegenius.com/", title: "Resume Genius" })}>Save</button>
                        <li><a href="https://www.myperfectresume.com/">My Perfect Resume</a></li>
                        <button onClick={() => this.saveResume({ url: "https://www.myperfectresume.com/", title: "My Perfect Resume" })}>Save</button>
                        <li><a href="https://www.canva.com/create/resumes/">Canva</a></li>
                        <button onClick={() => this.saveResume({ url: "https://www.canva.com/create/resumes/", title: "Canva" })}>Save</button>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Resume;