import React from 'react'
import "./Header.css"

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
    </header>
  )
}

export default Header