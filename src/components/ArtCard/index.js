import React from 'react';
import './style.css'
import { Container } from 'react-bootstrap';


export default function ArtCard(props) {
  return (
    <div className="ArtCard">
      <h3>{props.article.title}</h3>
      <p>{props.article.url}</p>
    </div>
  )
}
