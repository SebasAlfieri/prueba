import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../About/About.css'



function Personal (props) {

    let { img, title, paragraph } = props

    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className="personalCard" data-aos="fade-up" data-aos-duration="1000">
            <div className="flip-card-inner">
                <div class="flip-card-front">
                    <div className="personalCardImg" style={{backgroundImage: `url(images/${img})`}}></div>
                </div>
                <div class="flip-card-back">
                    <h3>{title}</h3>
                    <p>{paragraph}</p>
                    {/* ▲ pedir textos para cada uno y acomodar. ver si agregamos un texto en general para todos o separados. por ejemplo su ocupación o puesto ▼*/}
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Personal