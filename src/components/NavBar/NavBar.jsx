import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navBarContainer'>
      <div className='navBarTitleContainer'>
        <div className='navBarTitle'>
          <h1>refle<span>j</span>ar</h1>
        </div>
      </div>
      <div className='navBarLinks'>
        <ul>
          <li>
            <a href="#">Qué hacemos</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Quienes somos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar