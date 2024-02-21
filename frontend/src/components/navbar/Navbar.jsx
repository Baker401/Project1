import React from 'react';
import './navbar.css';
import icon from '../../assets/icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src={icon} alt='icon'></img>
            <h3>T<span>r</span>K<span>d</span></h3>
        </div>
        <div className='navbar-right'>
            <div><a href='/Home'>Home</a></div>
            <div><a href='/Services'>Services</a></div>
            <div><a href='/About'>About</a></div>
            <div><a href='/Contacts'>Contact</a></div>
        </div>
    </div>
  )
}

export default Navbar