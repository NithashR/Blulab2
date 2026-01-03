import React from 'react'
import {animateScroll as scroll} from 'react-scroll'; 
import { FaFacebook, FaGithub,FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksWrapper, FooterLinksContainer, FooterWrap} from './FooterElements';
import { SocialIconLink, SocialMedia, SocialLogo, WebsiteRights, SocialIcons, SocialMediaWrap } from './FooterElements';



const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }

  return (
    <FooterContainer>
        <FooterWrap>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    Blulab Consulting
                </SocialLogo>
                <WebsiteRights>Blulab Consulting Ⓒ {new Date().getFullYear()}All rights reserved.</WebsiteRights>
                <SocialIcons>

                        <SocialIconLink href="//www.linkedin.com/company/blulabconsulting/about/" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>

                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer