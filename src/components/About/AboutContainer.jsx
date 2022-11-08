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
        img="plataformas.webp"
        title="Plataformas Digitales"
        description="Contamos historias usando datos y los reflejamos de manera accesible, clara y pedagógica a través de plataformas web. 
        Construimos plataformas webs utilizando datos recabados en investigaciones sociales."
      />
      <About
        animation="fade-right"
        img="investigacion.webp"
        title="Investigación"
        description="Desde una perspectiva interdisciplinaria contribuimos a la generación de conocimiento y acompañamos procesos de investigación a través del análisis de datos, generación de informes. generación de nuevos conocimiento. Diferentes perspectivas metodológicas"
        flexDirection="row-reverse"
        reverseText = "flex-end"
        textAlign = "end"
      />
      <About
        animation="fade-left"
        img="formaciones.webp"
        title="Formaciones"
        description="Acercamos a la comunidad herramientas tecnológicas y metodologías múltiples para integrar y potenciar conocimientos.

        Brindamos herramientas tecnológicas para personas y organizaciones interesadas en ampliar sus conocimientos en temáticas sociales. 
        
        Brindamos herramientas tecnológicas para integrar conocimientos en temáticas sociales a través del análisis y visualización de datos."
      />
      <div className='separador'></div>
    </div>
  )
}

export default AboutContainer