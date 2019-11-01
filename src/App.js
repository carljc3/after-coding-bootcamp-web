import React from "react";
import NavBar from "./components/NavBar";
import OurJumbotron from './components/Jumbotron';
import Card from "./components/Card1";
import ArticleCard from "./components/Article_Card";
import ImageOne from "./components/FP_IMG";
import ResumeBuilder from "./components/Resume";
import FlexBox from "./components/Youtube";
import {Jumbotron,Container, Row, Col} from 'react-bootstrap';
import JobPostings from './components/jobPostings';

 const App=()=> 
   (
    <div>
      <NavBar/>
      <OurJumbotron title="Searching for your next step?"/>
      <Card/>
      <Container className="container-fluid">
        <Row className="mw-100 no-gutters">
          
          <Col sm="6">
          <ArticleCard/>
          </Col>
          <Col sm="6">
          <ImageOne/>
          </Col>
      </Row>
      </Container>
      <ResumeBuilder/>
      <FlexBox/>
      <FlexBox/>
      <JobPostings/>
   </div>
  );


export default App;
