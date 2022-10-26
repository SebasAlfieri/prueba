import React from 'react'
import Project from "./Project"
import "./Projects.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  return (
    <div className='projectsMainContainer' id='projects'>
      <h2 data-aos="fade-down">Proyectos</h2>
      <div className='projectsContainer'>
        <Project
          title="PIS"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores nostrum vel dolore, nihil debitis repellendus sint laboriosam iste. Quam."/>
        <Project
          title="MLF"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores nostrum vel dolore, nihil debitis repellendus sint laboriosam iste. Quam."/>
        <Project
          title="PYEPH"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores nostrum vel dolore, nihil debitis repellendus sint laboriosam iste. Quam."/>
      </div>
    </div>
  )
}

export default Projects