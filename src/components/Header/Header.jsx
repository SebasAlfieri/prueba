import React,{ Component } from 'react'
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
  return (
    <header>
      <div className='headerTitleContainer'>
        <h2>reflejar</h2>
      </div>
      <div className='headerTextContainer'>
        <div className='headerTextTop'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sit, architecto sint qui voluptas quidem dolorem tempore reiciendis sapiente doloremque. Odio odit et similique in eligendi saepe consectetur dolor ut tempora. Porro molestiae nostrum beatae unde vitae mollitia animi tenetur distinctio, illum alias id, laboriosam voluptatum temporibus laborum eum aut!</p>
        </div>
        <div className='headerTextBot'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sint rem. Placeat nostrum dolore illo. Quos, voluptatem! Architecto vel nihil, velit quis reprehenderit nostrum quae, unde, iure laudantium possimus dicta.</p>
        </div>
      </div>
      <div className="headerSpace"></div>
      <ParticlesBg type="cobweb" color="#00b380" num={200} bg={true} />
    </header>
  )
}

export default Header