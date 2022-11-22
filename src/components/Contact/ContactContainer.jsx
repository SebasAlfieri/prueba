import React, { useEffect } from 'react'
import "./Contact.css"
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
        img="contact.webp"
        title="Contacto"
        description1="Si tenes datos y queres contar una historia, ¡escribinos!"
        /*description2="Si te interesa lo que hacemos, te queres contactar con nosotrs. Si te copa la idea metele bala, contactate dale!"*/
        />
    </div>
  )
}

export default ContactContainer