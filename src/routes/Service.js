import React from 'react'
import Navbar from '../componentes/Navbar'
import Hero from '../componentes/Hero'
import ServiceBanner from '../assets/12.jpg'
import Footer from '../componentes/Footer'
import Trip from '../componentes/Trip'

function Service() {
  return (
    <div>
        <Navbar/>
        <Hero 
            cName='hero-about'
            heroImg={ServiceBanner}
            title='Service'
            heading='title'
            btnClass='hide'
        ></Hero>
        <Trip/>
        <Footer/>
    </div>
  )
}

export default Service