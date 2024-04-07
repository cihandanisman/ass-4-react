import React from 'react'
import logo from '../assets/cw.svg'
import '../sass/Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-image'><img src={logo} alt="" width={"100px"} /></div>
        <ul className='header-ul'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header