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
          {/* ▼ Acomodar centrar y ver espaciados :) ▼ */}
          <p>Para acercarlos a la comunidad.</p>
          <p>Para la toma de conciencia.</p>
          <p>Para la toma de decisiones.</p>
          <p>Para la incidencia política.</p>
        </div>
        <div className='headerTextBot'>
        <p>Con el surgimiento de las nuevas tecnologías y con el enorme volumen de datos generados creemos fundamental su análisis y visualización para entender la realidad.</p>
        </div>
      </div>
      <div className="headerSpace"></div>
      <ParticlesBg type="cobweb" color="#00b380" num={200} bg={true} />
    </header>
  )
}

export default Header