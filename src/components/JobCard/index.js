import React from 'react';
import './style.css'
import { Container, FormText } from 'react-bootstrap';
import axios from 'axios'

export default class JobCard extends React.Component {
  saveJob = (newJob) => {
    // console.log('newJob', newJob.jobPosting.job.title)

    axios.post(`https://acbc-api.herokuapp.com/api/portfolio/jobs`, { newJob }, { withCredentials: true }).then(response => console.log(response))
  }

  render() {
    console.log('~~~~~~~~~~~~~~~')
    console.log(this.props.job.id)
    // const jobPosting = {url: this.props.job.apply_url, title: this.props.job.title}
    // console.log(jobPosting)
    return (
      <div className="JobCard">
        <h3 className="JobTitle">{this.props.job.title}</h3>
        <a className="ApplyHere" href={this.props.job.apply_url}>Apply Here</a><br /><br />
        <button className="SaveJob" onClick={() => this.saveJob({ url: this.props.job.apply_url, title: this.props.job.title })}>Save</button>
      </div>
    )
  }
}
