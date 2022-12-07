import React,{ useEffect } from 'react'
import ParticlesBg from 'particles-bg'
import "./Header.css"

let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      // body: "./img/icon.png", // Whether to render pictures
      // rotate: [0, 20],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      color: ["random", "#b154a6"],
      cross: "dead", // cross or bround
      random: 15,  // or null,
      g: 5,    // gravity
      // f: [2, -1], // force
      onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    };


function Header() {

  useEffect(() => {
    document.title = `Reflejar`;
  }, []);

  return (
    <header>
      <div className='headerTitleContainer'>
        <h2>refle<span>j</span>ar</h2>
      </div>
      <div className='headerTextContainer'>
        <div className='headerTextTop'>
          <b>Contamos historias a través del análisis de datos</b>
          <p>para</p>
          {/* ▼ Acomodar centrar y ver espaciados :) ▼ */}
          <div className='containerPara'>
          <p></p>
            <ul>
              <li className='li1'>acercarlos a la comunidad.</li>
              <li className='li2'>la toma de conciencia.</li>
              <li className='li3'>la toma de decisiones.</li>
              <li className='li4'>la incidencia política.</li>
            </ul>      
          </div>
        </div>
      </div>
      <div className="headerSpace"></div>
      <ParticlesBg type="cobweb" color="#00b380" num={200} bg={true} />
    </header>
  )
}

export default Header