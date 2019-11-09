import React, { Component } from "react";
import API from "../utils/API";
import JobCard from "../JobCard"
import './style.css';
import Axios from "axios";

class JobPostings extends Component {
  state = {
    JobPostings: []
  };

  componentDidMount() {
    this.loadJobPostings();
  }

  loadJobPostings = () => {
    API.getJobPostings()
      .then(res =>
        this.setState({ JobPostings: res.data.listings.listing })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    this.props.clickHandler(this.props.data, this.props.whereToSave);
    event.preventDefault();
    Axios.post("/api/savearticle")
  };

  render() {
    return (
      <div className="JobPosting">
        {
          this.state.JobPostings.map(posting => {
            return <JobCard job={posting} />
          })
        }
      </div>
    );
  }
}

export default JobPostings;
