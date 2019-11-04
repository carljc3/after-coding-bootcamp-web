import React from "react";
import NavBar from "../components/NavBar";
import OurJumbotron from '../components/Jumbotron';
import Card from "../components/Card1";
import ArticleCard from "../components/Article_Card";
import ArticleAccordian from "../components/Articles/index";
import FlexBox from "../components/Youtube";
import {Jumbotron,Container, Row, Col} from 'react-bootstrap';
import JobPostings from '../components/jobPostings';



export default class Home extends React.Component {
  render() {
    return (
      <div>
      {/* <NavBar/> */}
      <OurJumbotron title="Searching for your next step?"/>
      <Card/>
      <ArticleCard/>
      <ArticleAccordian/>
      <FlexBox/>
      <FlexBox/>
      <JobPostings/>
   </div>
    )
  }
}
