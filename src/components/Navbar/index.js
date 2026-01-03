import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, Nav2, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, LogoContainer } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import CustomSVG from "./CustomSVG";
import CustomSVG2 from "./CustomSVG2";
import AnimatedSVG from "./Animate"
import { Column1, InfoContainer, InfoWrapper2 } from '../InfoSection/InfoElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80 )
    {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  },[]);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Blulabs</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to='home' onClick={toggleHome}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='about' duration={300} spy={true} exact ='true' offset={-80} 
              >About</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks 
              to='resume'  duration={500} spy={true} exact ='true' offset={-80} 
              >????</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='works'  duration={500} spy={true} exact ='true' offset={-80} 
              >????</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks 
              to='contact1'  duration={300} spy={true} exact ='true' offset={-80}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        </Nav>
      <Nav2>
        <LogoContainer>
          <CustomSVG2 />
        </LogoContainer>
      </Nav2>
    </>
  );
};

export default Navbar;