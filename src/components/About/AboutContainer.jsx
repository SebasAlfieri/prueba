import React from 'react'
import "./About.css"
import About from "./About"





function AboutContainer() {


{/* <div className='AboutSection'>
        <div className='AboutImgContainer'>
          <div className='AboutImg'></div>
        </div>
        <div className='AboutText'>
          <div className='AboutTextTitle'>
            <h3>Plataformas</h3>
          </div>
          <div className='AboutTextDescription'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo optio consequatur, magni modi error, blanditiis nostrum voluptatibus assumenda fuga quasi perspiciatis cum id natus hic.
          </div> 
        </div>
      </div> */}

  return (
    <div className='AboutMainContainer'>
      <h2>Qué hacemos</h2>
      <About 
      img="aboutProject.jpg"
      title="Proyectos"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima aut magnam labore officia molestias possimus laboriosam aspernatur iste quos, animi provident sapiente nostrum consequuntur."
      />
      <About 
      img="investigacion.jpg"
      title="Investigación"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima aut magnam labore officia molestias possimus laboriosam aspernatur iste quos, animi provident sapiente nostrum consequuntur."
      flexDirection="row-reverse"
      reverseText = "flex-end"
      textAlign = "end"
      />
      <About 
      img="formaciones.jpg"
      title="Formaciones"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed minima aut magnam labore officia molestias possimus laboriosam aspernatur iste quos, animi provident sapiente nostrum consequuntur."
      />
      <div className='separador'></div>
    </div>
  )
}

export default AboutContainer