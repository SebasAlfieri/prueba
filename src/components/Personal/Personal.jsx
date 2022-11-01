import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../About/About.css'


function Personal (props) {

    let { img, title } = props

    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className="card">
            <img src={({img})} alt={title} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quod soluta id ullam, corrupti debitis fugit expedita optio explicabo quia placeat! Officiis id quod facere impedit debitis magni molestiae distinctio.</p>
            </div>
        </div>
    )
}

export default Personal