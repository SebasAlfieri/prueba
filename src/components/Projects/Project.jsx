import React from 'react'
import "./Projects.css"

function Project() {
  return (
    <div className='projectCard'>
      <div className='projectCardImage'>
        <img src="images/eclipse.svg" alt="" />
      </div>
      <div className="projectCardBottom">
        <div className="projectCardTitle">
          <h3>Titulo</h3>
        </div>
        <div className="projectCardDescription">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facere quibusdam aliquam id fugit maxime vitae amet iusto sapiente ducimus, ea</p>
        </div>
        <a  href='#' className="projectCardLink">Ver Proyecto</a>
      </div>
    </div>
  )
}

export default Project