import React from 'react';
import '../App.css';
import logo from '../images/oak-logo.svg'

function Footer() {
  return (
    <footer className=''>
      <div className=''>
        <ul className=''>
          <li className=''><a href='/' className=''>Home</a></li>
          <li className=''><a href='/' className=''>About us</a></li>
          <li className=''><a href='/' className=''>Our coffee</a></li>
        </ul>
        <ul className=''>
          <li className=''><a href='/' className=''>Journal</a></li>
          <li className=''><a href='/' className=''>Shop</a></li>
          <li className=''><a href='/' className=''>The Roasters</a></li>
        </ul>
        <ul className=''>
          <li className=''><a href='/' className=''>Contact</a></li>
          <li className=''><a href='/' className=''>Events</a></li>
          <li className=''><a href='/' className=''>Training</a></li>
        </ul>
      </div>
      <div className=''>
        <img src={logo} alt='logo' className='' />
      </div>
      <div className=''>
        <div>&copy; Oak Roasters</div>
        <ul className=''>
          <li>
            <a href='/' className=''>Delivery</a>
          </li>
          <li>
            <a href='/' className=''>Privacy</a>
          </li>
          <li>
            <a href='/' className=''>Terms & Conditions</a>
          </li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
