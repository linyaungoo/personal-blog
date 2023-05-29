import React from 'react';
import './navbar.css';
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo.png';
const Menu = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#about'>About Me</a></p>
      <p><a href='#projects'>Projects</a></p>
      <p><a href='#contact'>Contact</a></p>
    </>
  );
};

const Navbar = () => {

  const[toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='personal__navbar'>
        <div className='personal__navbar-links__logo'>
          <img src={logo} alt='logo'/>
        </div>
      <div className='personal__navbar-links'>
        <div className='personal__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='personal__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className="personal__navbar-menu_container scale-up-center">
          <div className="personal__navbar-menu_container-links">
            <Menu/>
          </div>
        </div>
        )
        }
      </div>
    </div>
  );
};

export default Navbar;
