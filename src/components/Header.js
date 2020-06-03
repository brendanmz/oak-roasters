import React from 'react';
import '../App.css';

import logo from '../images/oak-logo.svg';

function Header() {
  return (
    <header className="">
      <div className="">
        <div className=''>
          <a href="/" className=''><h3>Menu</h3></a>
          <a href='/'><img src={logo} className='' alt='logo' style={{ height: '2rem' }} /> </a>
          <a href="/" className=''><h3>Shop</h3></a>
        </div>
      </div>
      <Title />
    </header>
  );
}

function Title() {
  return (
    <div className=''>
      <div className=''>
        <div className=''>
          <img src={logo} className='' alt='logo' style={{ height: '8rem' }} />
          <div className=''>OAK ROASTERS</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
