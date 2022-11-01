import React, { useEffect } from 'react'
import Personal from './Personal'
import "./Personal.css"
import '../About/About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function PersonalContainer() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='personalMainContainer' id='quienesSomos'>
      <h2 className='AboutTextTitle'>Quiénes somos</h2>
      <p className='AboutTextDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos culpa quam et aliquid. Est nesciunt cum, temporibus quod alias necessitatibus ex maxime maiores eligendi laboriosam natus delectus voluptatem earum voluptate!</p>
      <div className='personalContainer'></div>
      <div className='separador'></div>
      <div>
        <Personal 
        img="card1.jpg"
        title="Ejemplo Pili" />
      </div>
    </div>
  )
}

export default PersonalContainer