import './TripStyles.css'
import Trip from '../componentes/Trip'

import React from 'react'

function TripData(props) {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img alt='img' src={props.tripImage}></img>
        </div>
        
        <h4>{props.head}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default TripData;