import React, { useEffect } from 'react'
import "../About/About.css"
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactContainer() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='AboutMainContainer' id='about'>
        <Contact 
        animation="fade-left"
        img="contact.gif"
        title="Contacto"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima aut magnam labore officia molestias possimus laboriosam aspernatur iste quos, animi provident sapiente nostrum consequuntur."
        />
    </div>
  )
}

export default ContactContainer