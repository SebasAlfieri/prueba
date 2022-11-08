import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact(props) {

  let { img, title, description1, description2, flexDirection, reverseText, textAlign, animation } = props
  
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div data-aos={animation}
    data-aos-offset="500"
    data-aos-duration="500" 
    className='ContactSection'>
        <div className='ContactImgContainer'>
          <div className='ContactImg' style={{backgroundImage: `url(images/${img})`}}></div>
        </div>
        <div className='ContactText' style={{alignItems: `${reverseText}`, textAlign: `${textAlign}`}}>
            <div className='ContactTextTitle'>
                <h3>{title}</h3>
            </div>
            <div className='ContactTextDescription'>
                <b>{description1}</b>
                <p>{description2}</p>
            </div>
            <div>
                <button className='ContactButton'>CTA</button>
            </div> 
        </div>
      </div>
  )
}

export default Contact