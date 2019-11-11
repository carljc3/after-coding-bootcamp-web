import React from 'react';
import './style.css'
import { Container } from 'react-bootstrap';


export default function ResumeCard(props) {
  return (
    <div className="ResumeCard">
      <h3>{props.resume.title}</h3>
    </div>
  )
}