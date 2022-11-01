import React, { useState } from 'react'
import "./NavBar.css"

function NavBar() {

  const [scroll, setScroll] = useState(false);
  const changeClass=()=>{
    const scrollValue=document.documentElement.scrollTop;
    if(scrollValue>500)
    {
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  }

  window.addEventListener('scroll', changeClass);

  return (
    <div className='navBarContainer'>
      <div className='navBarTitleContainer'>
        <div className='navBarTitle'>
          <div className={scroll ?"none":"navBarIcon"}></div>
          <h1 className={scroll ?"":"none"}>refle<span>j</span>ar</h1>
        </div>
      </div>
      <div className='navBarLinks'>
        <ul>
          <li>
            <a href="#about">Qué hacemos</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#quienesSomos">Quienes somos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar