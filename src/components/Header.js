import React from 'react';
import styled from 'styled-components';
import { Link } from '../styles/components';
import logo from '../images/oak-logo.svg';
import theme from '../styles/theme';
import background from '../images/beans-background.jpg';

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
  opacity: 90%;
`

const TitleBackground = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 2rem;
  font-weight: ${theme.fontWeight.bold}
`

function Header() {
  return (
    <header >
      <MenuBar className='MenuBar'>
        <Link href="/" ><h3 style={{ fontWeight: theme.fontWeight.regular }}>Menu</h3></Link>
        <Link href='/'><img src={logo} alt='logo' style={{ height: '2rem' }} /> </Link>
        <Link href="/" ><h3 style={{ fontWeight: theme.fontWeight.regular }}>Shop</h3></Link>
      </MenuBar>
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

export default Header;
