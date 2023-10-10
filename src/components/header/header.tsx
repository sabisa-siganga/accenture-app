import React from 'react'
import './header.scss';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <img src={logo} alt="logo" />
             <nav className='navigation'>
               <Link  to="/Services">Services</Link>
               <Link to="/Industries">Industries</Link>
               <Link to="/Cases">Cases</Link>
               <Link to="/Contact" >Contact</Link>
             </nav>
             <button>Let's Talk</button>
        </div>
    </div>
  )
}

export default Header;