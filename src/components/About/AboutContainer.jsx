import React, { useEffect } from 'react'
import "./About.css"
import About from "./About"
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutContainer() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='AboutMainContainer' id='about'>
      <h2 data-aos="fade-down">Qué hacemos</h2>
      <About 
      animation="fade-left"
      img="plataformas.svg"
      title="Plataformas Digitales"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima aut magnam labore officia molestias possimus laboriosam aspernatur iste quos, animi provident sapiente nostrum consequuntur."
      />
      <About 
      animation="fade-right"
      img="investigacion.svg"
      title="Investigación"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima aut magnam labore officia molestias possimus laboriosam aspernatur iste quos, animi provident sapiente nostrum consequuntur."
      flexDirection="row-reverse"
      reverseText = "flex-end"
      textAlign = "end"
      />

      <About 
      animation="fade-left"
      img="formaciones.svg"
      title="Formaciones"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima aut magnam labore officia molestias possimus laboriosam aspernatur iste quos, animi provident sapiente nostrum consequuntur."
      />
      <div className='separador'></div>
    </div>
  )
}

export default AboutContainer