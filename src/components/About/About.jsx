import React from 'react'

function About(props) {

  let { img, title, description, flexDirection, reverseText, textAlign } = props
  
  // const reverseText = {
  //   alignItems: "flex-end",
  //   textAlign: "end"
  // }


  return (
    <div className='AboutSection' style={{flexDirection}}>
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
        </div>
      </div>
  )
}

export default About