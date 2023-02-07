import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Hi, I'm</h5>
          <h1>Danish Saleem</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <CTA/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi, veritatis numquam veniam dolorem odit, minima vero tenetur accusamus consequuntur eveniet, in distinctio similique voluptas animi. Veniam rerum eos nostrum!</p>
          <HeaderSocials/>
        </div>

    </header>
  )
}

export default Header