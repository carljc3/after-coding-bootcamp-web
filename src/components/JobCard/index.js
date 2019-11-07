import React from 'react';

import './style.css'
import { Container } from 'react-bootstrap';

export default function JobCard(props) {
  return (
    <div className="JobCard">
      <h3 className="JobTitle">{props.job.title}</h3>
      <a className="Link" href={props.job.apply_url}>apply here!</a>
      <p></p>
    </div>
   
  
  )
}
