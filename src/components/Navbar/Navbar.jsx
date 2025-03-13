import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile_icon from '../../assets/profile_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Início</li>
          <li>Programas de TV</li>
          <li>Filmes</li>
          <li>Popular</li>
          <li>Minha Lista</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-profile">
          <img src={profile_icon} alt="" className='profile' />
          <div className='dropdown'>
            <p>Sair</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
