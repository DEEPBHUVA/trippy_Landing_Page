import React from 'react'
import Navbar from '../componentes/Navbar'
import Hero from '../componentes/Hero'
import HeroBenner from '../assets/16.jpg'
import Destination from '../componentes/Destination'
import Trip from '../componentes/Trip'
import Footer from '../componentes/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero 
            cName='hero'
            heroImg={HeroBenner}
            title='Your Journey Your Stroy'
            text='Choose Your Favourite Destination.'
            btnText='Travel Plan'
            url='/'
            btnClass='show'
        ></Hero>
        <Destination/>
        <Trip/>
        <Footer/>
    </div>
  )
}

export default Home