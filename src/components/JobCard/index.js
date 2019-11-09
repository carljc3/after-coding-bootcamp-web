import React from 'react';
import './style.css'
import { Container, FormText } from 'react-bootstrap';

export default function JobCard(props) {
<<<<<<< HEAD


  return (
    <div>
      <h3 className="JobTitle">{props.job.title}</h3>
      <a className="Apply Here" href={props.job.apply_url}>Apply Here!</a>
      <p></p>
    </div>
=======
  return (
    <div className="JobCard">
      <h3 className="JobTitle">{props.job.title}</h3>
      <a className="ApplyHere" href={props.job.apply_url}>Apply Here</a><br></br>
      <button className="SaveJob">Save Job</button>
    </div>




>>>>>>> 1e32bce4c55f7baad1f33e8605cc15d49bb14765
  )
}
