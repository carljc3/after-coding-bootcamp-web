import React from 'react';
import './style.css'
import { Container, FormText } from 'react-bootstrap';

export default function JobCard(props) {
  return (

    <div>
      <h3 className="JobTitle">{props.job.title}</h3>

      <a className="ApplyHere" href={props.job.apply_url}>Apply Here</a>
      <button className="SaveJob">Save Job</button>


      <h3>{"TITLE"}</h3>
      <a href={"URL"}>apply here!</a>
    </div>
  )
}

