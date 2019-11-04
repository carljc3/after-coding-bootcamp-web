import React, { Component } from "react";
import API from "../utils/API";

class JobPostings extends Component {
  state = {
    JobPostings: []
  };

  componentDidMount() {
    this.loadJobPostings();
  }

  loadJobPostings = () => {
    API.getJobPostings()
      .then(res =>{
        console.log('getJobPostings res', res.data)
        this.setState({ JobPostings: res.data.listings.listing })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  };

  render() {
    return (
     <div>
         {
             this.state.JobPostings.map(posting =>{
                 return (
                <div className= "container">
                    <h3>Title: {posting.title}</h3>
                    <h1>How to Apply: {posting.apply_url} </h1>
                </div>)
             })
         }
     </div>
    );
  }
}

export default JobPostings;
