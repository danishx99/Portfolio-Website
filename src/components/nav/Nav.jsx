import React from 'react'
import { useState } from 'react'
import "./nav.css"
import {BsPerson} from "react-icons/bs"
import {FaClipboardList} from "react-icons/fa"
import {BiMessage} from "react-icons/bi"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><BsPerson/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === '#portfolio' ? 'active' : ''}><FaClipboardList/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><BiMessage/></a>
    </nav>
  )
}

export default Nav