import React from 'react'
import Navbar from '../componentes/Navbar'
import Hero from '../componentes/Hero'
import ContactBanner from '../assets/2.jpg'
import Footer from '../componentes/Footer'
import ContactForm from '../componentes/ContactForm'

function Contact() {
  return (
    <div>
        <Navbar/>
        <Hero 
            cName='hero-about'
            heroImg={ContactBanner}
            title='Contact'
            heading='title'
            btnClass='hide'
        ></Hero>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact