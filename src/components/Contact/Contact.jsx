import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact(props) {

  let { img, title, description, flexDirection, reverseText, textAlign, animation } = props
  
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div data-aos={animation}
    data-aos-offset="500"
    data-aos-duration="500" 
    className='AboutSection' style={{flexDirection, width:"60vw"}}>
        <div className='AboutImgContainer'>
          <div className='AboutImg' style={{backgroundImage: `url(images/${img})`}}></div>
        </div>
        <div className='AboutText' style={{alignItems: `${reverseText}`, textAlign: `${textAlign}`}}>
            <div className='AboutTextTitle'>
                <h3>{title}</h3>
            </div>
            <div className='AboutTextDescription'>
                {description}
            </div>
            <div>
                <button className='ContactButton'>CTA</button>
            </div> 
        </div>
      </div>
  )
}

export default Contact