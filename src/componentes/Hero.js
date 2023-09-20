import React from 'react'
import './HeroStyles.css'


function Hero(props) {
  return (
    <div className={props.cName}>
        <img src={props.heroImg} alt='hero_imag'></img>

        <div className='hero-text'>
            <h1 className={props.heading}>{props.title} </h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btnText}</a>
        </div>
    </div>
  )
}

export default Hero 