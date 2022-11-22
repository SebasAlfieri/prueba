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
        clase="AboutText plataformasDescription"
        animation="fade-left"
        img="plataformas.webp"
        title="Plataformas Digitales"
        description1="Contamos historias usando datos y los reflejamos de manera accesible, clara y pedagógica a través de plataformas web."
        /*description2="Construimos plataformas webs utilizando datos recabados en investigaciones sociales."*/
      />
      <About
        clase="AboutText investigacionDescription"
        animation="fade-right"
        img="investigacion.webp"
        title="Investigación"
        description1="Desde una perspectiva interdisciplinaria, contribuimos a la generación de conocimiento y acompañamos procesos de investigación a través del análisis de datos."
        /*description2="Y generación de informes, generación de nuevos conocimientos. Diferentes perspectivas metodológicas."*/
        flexDirection="row-reverse"
        reverseText = "flex-end"
        textAlign = "end"
      />
      <About
        clase="AboutText formacionesDescripcion"
        animation="fade-left"
        img="formaciones.webp"
        title="Formaciones"
        description1="Acercamos a la comunidad herramientas tecnológicas y metodologías múltiples para integrar y potenciar conocimientos."
        /*description2="Brindamos herramientas tecnológicas para personas y organizaciones interesadas en ampliar sus conocimientos en temáticas sociales."*/
        /*description3="Brindamos herramientas tecnológicas para integrar conocimientos en temáticas sociales a través del análisis y visualización de datos."*/
      />
      <div className='separador'></div>
    </div>
  )
}

export default AboutContainer