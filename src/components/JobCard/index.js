import React from 'react';
import './style.css'
import { Container, FormText } from 'react-bootstrap';

export default function JobCard(props) {


  return (
    <div>
      <h3 className="JobTitle">{props.job.title}</h3>
      <a className="Apply Here" href={props.job.apply_url}>Apply Here!</a>
      <p></p>
    </div>
  )
}
