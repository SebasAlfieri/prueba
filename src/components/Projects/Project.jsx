import React,{ useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Projects.css"

function Project(props) {

  let { title, description, img } = props

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className='projectCard'>
      <div className='projectCardImage'>
        <img src="images/eclipse.svg" alt="" />
      </div>
      <div className="projectCardBottom">
        <div className="projectCardTitle">
          <h3>{title}</h3>
        </div>
        <div className="projectCardDescription">
          <p>{description}</p>
        </div>
        <a  href='#' className="projectCardLink">Ver Proyecto</a>
      </div>
    </div>
  )
}

export default Project