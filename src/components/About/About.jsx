import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(props) {

  let { img, title, description1, description2, description3, flexDirection, reverseText, textAlign, animation, clase } = props
  
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div data-aos={animation}
    data-aos-offset="500"
    data-aos-duration="500" className='AboutSection' style={{flexDirection}}>
        <div className='AboutImgContainer'>
          <div className='AboutImg' style={{backgroundImage: `url(images/${img})`}}></div>
        </div>
        <div className={clase} style={{alignItems: `${reverseText}`, textAlign: `${textAlign}`}}>
          <div className='AboutTextTitle'>
            <h3>{title}</h3>
          </div>
          <div className='AboutTextDescription'>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
          </div> 
        </div>
      </div>
  )
}

export default About