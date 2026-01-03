import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const ContactContainer = styled.div`
    color: #fff;
    background: #000;        /* remove quotes around color */
    height: 700px;
    flex: 1;

    /* Make this a positioned element so z-index takes effect */
    position: relative;
    z-index: 1;           /* higher than the logo's z-index */

    @media screen and (max-width: 768px){
        
        z-index: 20;
    }

    @media screen and (max-width: 480px)
    {
        z-index: 20;
    }

    /* If you previously relied on top/left in the media queries, keep in mind
       those only work for positioned elements with absolute/fixed positioning.
       Here we keep Contact in normal flow and only ensure it sits above the logo. */
`;

export const ContactWrapper = styled.div`
    display: grid;
    z-index:1;
    height: 650px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const Title = styled.h1`
    color: #000;
    font-size: 40px;
    text-align: center;
    margin-top: -80px;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px)
    {
        font-size: 32px;
    }
`

export const Message = styled.h2`
    color: #ffffffff;
    font-size: 25px;
    text-align: center;
    margin-top: 50px;
    max-width: 400px;

    @media screen and (max-width: 768px){
        font-size: 30px;
    }

    @media screen and (max-width: 480px)
    {
        font-size: 22px;
    }
` 

export const ContactInfo = styled.h3`
    color: #000;
    font-size: 25px;
    text-align: center;
    margin-top:20px;
`

export const MailIcon = styled.div`
    display: block;
    position: absolute;
    margin-top: -50px;
    margin-left: 350px;
    align-items: left;
    transform: translate(-100%, 60%);
    font-size: 5.0rem;
    cursor: pointer;
    color: #000;
    
    @media screen and (max-width: 768px){
        visibility: hidden;
    }
`

export const Name = styled.div`
    font-size: 5.0rem;
`

export const Form = styled.div`
    text-align: center;
    font-size: 30px;
    
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ spot }) => 
        spot ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ spot }) => 
            spot ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`

export const Column1 = styled.div`
    margin-bottom: 1px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-top: 1px;
    padding: 0 15px;
    grid-area: col2;
`

export const Row1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: row1;
`

export const Sizing = styled.div``;


/* NAV / LOGO PART */
export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const LogoContainer = styled.div`
    position: fixed;       /* Keep it fixed while scrolling */
    top: 50%;              /* Start at 50% from the top */
    left: 50%;             /* center horizontally (use transform for true centering) */
    transform: translate(-50%, -50%); /* Truly center in both axes */
    z-index: 30            /* lower than ContactContainer (which has z-index: 20) */

    @media screen and (max-width: 650px)
    {
        left: 30%;
    }

    @media screen and (max-width: 480px)
    {
        left: 27%;
    }
`;