import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, ListItem } from '../styles/components';
import logo from '../images/oak-logo.svg';
import theme from '../styles/theme';
import background from '../images/beans-background.jpg';

// TODO: Add sidebar with animation

const MenuBar = styled.div`
  background-color: ${theme.colors.yellow};
  position: fixed;
  z-index:10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TitleWrapper = styled.div`
  background-image: url(${background});
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  color: #111;
  border-radius: 1.5rem;
  padding: 2rem 1rem;
  font-size: 1.7rem;
  font-weight: ${theme.fontWeight.bold}
`

const SidebarWrapper = styled.div`
  position: absolute;
  left: ${props => props.position ? '0' : '-14rem'};
  padding: 5rem 5rem 5rem 3rem;
  height: 85vh;
  background-color: white;
  text-align: left;
  & li {
    padding: 0.5rem 0;
  }

`
console.log(SidebarWrapper);

function Header() {
  const [position, setPosition] = useState(true);

  function toggleSidebar(e) {
    e.preventDefault();
    position !== true ? setPosition(true) : setPosition(false);
    console.log('position :>> ', position);
    console.log(SidebarWrapper);
  }
  return (
    <header >
      <MenuBar className='MenuBar'>
        <Link href="/" onClick={toggleSidebar} ><h4 style={{ fontWeight: theme.fontWeight.regular }}>Menu</h4></Link>
        <Link href='/'><img src={logo} alt='logo' style={{ height: '2rem' }} /> </Link>
        <Link href="/" ><h4 style={{ fontWeight: theme.fontWeight.regular }}>Shop</h4></Link>
      </MenuBar>
      <SidebarWrapper position >
        <MenuSideBar />
      </SidebarWrapper>
      <TitleWrapper>
        <Title />
      </TitleWrapper>
    </header >
  );
}

function Title() {
  return (
    <TitleBackground>
      <img src={logo} alt='logo' style={{ height: '8rem' }} />
      <div>OAK ROASTERS</div>
    </TitleBackground>
  )
}

function MenuSideBar() {
  return (
    <ul>
      <ListItem><Link href="/">About Us</Link></ListItem>
      <ListItem><Link href="/">Our Coffee</Link></ListItem>
      <ListItem><Link href="/">Journal</Link></ListItem>
      <ListItem><Link href="/">Shop</Link></ListItem>
      <ListItem><Link href="/">The Roasters</Link></ListItem>
      <ListItem><Link href="/">Contact</Link></ListItem>
      <ListItem><Link href="/">Events</Link></ListItem>
      <ListItem><Link href="/">Training</Link></ListItem>
    </ul>
  )
}

export default Header;
