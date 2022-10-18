import React from 'react'
import Project from "./Project"
import "./Projects.css"

function Projects() {
  return (
    <div className='projectsMainContainer'>
      <h2>Proyectos</h2>
      <div className='projectsContainer'>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  )
}

export default Projects