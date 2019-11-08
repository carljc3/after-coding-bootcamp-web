import React from 'react';
import './style.css'
import { Container, FormText } from 'react-bootstrap';

export default function JobCard(props) {


  return (
    <div>
      <h3 className="JobTitle">{"TITLE"}</h3>
      <a className="Link" href={"URL"}>apply here!</a>
      <p></p>

      <h3>{"TITLE"}</h3>
      <a href={"URL"}>apply here!</a>
    </div>
  )
}
