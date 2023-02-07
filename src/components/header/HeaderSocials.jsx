import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a className='header__icon' href="https://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a className='header__icon' href="https://github.com" rel="noreferrer" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials