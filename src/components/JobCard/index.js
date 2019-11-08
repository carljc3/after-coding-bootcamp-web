import React from 'react';


import './style.css'
import { Container } from 'react-bootstrap';


export default function JobCard(props) {
  return (
    <div className="JobCard">

      <h3 className="JobTitle">{props.job.title}</h3>

      <a className="ApplyHere" href={props.job.apply_url}>Apply Here</a>
      <button className="SaveJob">Save Job</button>
    
    </div>
    

  )
}
