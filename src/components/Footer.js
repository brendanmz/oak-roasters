import React from 'react';
import logo from '../images/oak-logo.svg'
import { Link, ListItem } from '../styles/components';


function Footer() {
  return (
    <footer className='Footer'>
      <div >
        <ul >
          <ListItem ><Link href='/' >Home</Link></ListItem>
          <ListItem ><Link href='/' >About us</Link></ListItem>
          <ListItem ><Link href='/' >Our coffee</Link></ListItem>
        </ul>
        <ul >
          <ListItem ><Link href='/' >Journal</Link></ListItem>
          <ListItem ><Link href='/' >Shop</Link></ListItem>
          <ListItem ><Link href='/' >The Roasters</Link></ListItem>
        </ul>
        <ul >
          <ListItem ><Link href='/' >Contact</Link></ListItem>
          <ListItem ><Link href='/' >Events</Link></ListItem>
          <ListItem ><Link href='/' >Training</Link></ListItem>
        </ul>
      </div>
      <div >
        <img src={logo} alt='logo' style={{ height: '3rem' }} />
      </div>
      <div >
        <div>&copy; Oak Roasters</div>
        <ul >
          <ListItem>
            <Link href='/' >Delivery</Link>
          </ListItem>
          <ListItem>
            <Link href='/' >Privacy</Link>
          </ListItem>
          <ListItem>
            <Link href='/' >Terms & Conditions</Link>
          </ListItem>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
