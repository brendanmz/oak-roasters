import React from 'react';
import logo from '../images/oak-logo.svg'
import { Link, ListItem, Wrapper } from '../styles/components';
import styled from 'styled-components';
import theme from '../styles/theme';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.5rem;
  padding: 1rem 0;
  font-size: 0.8rem;
  width: 95%;
`
const FooterList = styled.ul`
  display: flex;

  & * {
    padding-left: 0.3rem;
  }
`
const FooterNavWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${theme.breakpoints.mobile}) {  
    flex-direction: row;
    text-align: left;
  }

  &>* {
    width: 33%;
    margin: 0 2rem;
  }
`

const FooterNavList = styled.ul`
  &>* {
    font-size: 0.94rem;
    padding-bottom: 0.5rem;
  }

`

function Footer() {
  return (
    <footer className='Footer'>

      <Wrapper>
        <FooterNavWrapper >
          <FooterNavList >
            <ListItem ><Link href='/' >Home</Link></ListItem>
            <ListItem ><Link href='/' >About us</Link></ListItem>
            <ListItem ><Link href='/' >Our coffee</Link></ListItem>
          </FooterNavList>
          <FooterNavList >
            <ListItem ><Link href='/' >Journal</Link></ListItem>
            <ListItem ><Link href='/' >Shop</Link></ListItem>
            <ListItem ><Link href='/' >The Roasters</Link></ListItem>
          </FooterNavList>
          <FooterNavList >
            <ListItem ><Link href='/' >Contact</Link></ListItem>
            <ListItem ><Link href='/' >Events</Link></ListItem>
            <ListItem ><Link href='/' >Training</Link></ListItem>
          </FooterNavList>
        </FooterNavWrapper>
        <div style={{ borderBottom: 'solid 1px black', width: '95%' }} >
          <img src={logo} alt='logo' style={{ height: '3rem' }} />
        </div>
        <FooterWrapper >
          <div>&copy; Oak Roasters</div>
          <FooterList >
            <ListItem>
              <Link href='/' >Delivery</Link>
            </ListItem>
            <ListItem>
              <Link href='/' >Privacy</Link>
            </ListItem>
            <ListItem>
              <Link href='/' >Terms & Conditions</Link>
            </ListItem>
          </FooterList>
        </FooterWrapper>
      </Wrapper>

    </footer>
  );
}

export default Footer;
