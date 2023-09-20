import React from 'react'
import Navbar from '../componentes/Navbar'
import Hero from '../componentes/Hero'
import AboutBanner from '../assets/about.jpg'
import Footer from '../componentes/Footer'
import AboutUS from '../componentes/AboutUS'

function About() {
  return (
    <div>
        <Navbar/>
        <Hero 
            cName='hero-about'
            heroImg={AboutBanner}
            title='About Us'
            heading='title'
            btnClass='hide'
        ></Hero>
        <AboutUS/>
        <Footer/>
    </div>
  )
}

export default About