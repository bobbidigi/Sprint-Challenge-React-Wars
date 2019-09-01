import React from 'react'
import './StarWars.css'
import { Card, CardText,
    CardTitle } from 'reactstrap';

export default function SWCard(props) {
  return (
    <div className="sw-card">
      <Card>
        <CardTitle className="Header">{props.name}</CardTitle>
        <CardText>{props.DOB}</CardText>
        <CardText>{props.gender}</CardText>  
      </Card>
    </div>
  )
}
