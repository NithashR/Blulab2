import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 0 50px;
    height: 1000px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0; 
        left: 0;
        right:0;
        bottom:0;
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
        pointer-events: none;
    }

`

export const HeroBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
`

export const VideoBg = styled.video`
    width: 100%;
    height:100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
     position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center; /* 👈 CENTER CHILDREN */

  max-width: 1200px;
  padding: 8px 24px;
  z-index: 3;

  @media screen and (max-width: 768px){
        font-size: 40px;
        left: 60%;
    }

    @media screen and (max-width: 480px)
    {
        font-size: 32px;
        left: 70%;
    }
`

export const HeroH1 = styled.h1`
    color: #000000ff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px)
    {
        font-size: 32px;
    }
    pointer-events: none;
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #ffffffff;
    font-weight: bold;
    font-size: 28px;
    width: 800px;
    text-align: left;      /* keep text aligned left */
    padding-left: 50%;     /* start roughly at middle of screen */
    box-sizing: border-box; /* ensures padding doesn't exceed width */
    pointer-events: none;

    @media screen and (max-width: 768px){
        font-size: 24px;
        width: 100%;
    }

    @media screen and (max-width: 668px){
        font-size: 18px;
        width: 130%;
    }

    @media screen and (max-width: 480px){
        font-size: 12px;
        text-align: right;
        padding-left: 10%;  /* adjust for mobile */
        width: 150%;
    }
`

export const HerobtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`


export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    position: relative;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

/* UPDATED: center the social icons */
export const SocialIcons = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;   /* center icons horizontally */
  align-items: center;       /* center icons vertically */
  gap: 16px;                 /* space between icons */
  flex: 1;                   /* take available space so icons stay centered between left/right siblings */
  min-width: 0;              /* prevents overflow in tight containers */
`;

export const SocialIconLink = styled.a`
    color: #0044ffff;
    font-size: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
`