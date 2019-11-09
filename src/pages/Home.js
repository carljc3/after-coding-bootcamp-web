import React from "react";
import NavBar from "../components/NavBar";
import OurJumbotron from '../components/Jumbotron';
import Card from "../components/Card1";
import ArticleCard from "../components/Article_Card";
import ArticleAccordian from "../components/Articles/index";
import JobPostings from '../components/jobPostings';
import Resume from "../components/Resume/Resume";
import JumboTwo from "../components/Jumbo2/Jumbo2"

import YoutubePostings from "../components/Youtube";

import Login from "../components/Login/login.js"
import Footer from "../components/Footer"
import CatPic from "../components/CatPic"


export default class Home extends React.Component {
  state = {
    showLogin: false
  }
  showLogin = () => {
    this.setState({
      showLogin: true
    })
  }
  hideLogin = () => {
    this.setState({
      showLogin: false
    })
  }
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <button onClick={this.showLogin}></button>
        {this.state.showLogin ? <Login clickHandler={this.hideLogin} /> : null}
        <OurJumbotron title="Searching for your next step?" />
        <Card />
        <ArticleCard />
        <ArticleAccordian />
        <Resume />
        <JumboTwo />

        <h3 className="JobsHeader">Job Postings</h3>
        <JobPostings />
        <CatPic />

        <h3 className="JobsHeader">Coding Bootcamp Videos</h3>
        {/* <YoutubePostings /> */}

        <Footer />
      </div>
    )
  }
}
