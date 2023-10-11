import React from 'react'
import './header.scss';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <img src={logo} alt="logo" />
             <nav className='navigation'>
               <a href='#services' >Services</a>
               <a href='#industries'  >Industries</a>
               <a href='#cases'>Cases</a>
               <a href='#contact'  >Contact</a>
             </nav>
             <button>Let's Talk</button>
        </div>
    </div>
  )
}

export default Header;