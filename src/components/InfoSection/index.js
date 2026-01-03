import React, { useState } from 'react'

import { Button } from '../ButtonElement';
import { FaDownload } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import './index.css';
import CustomSVG from "./CustomSVG";


import {
    InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column, Column4, Description, ProjectWrapper,
    TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Tops, ContactInfo, Main, Sidebar, InfoRow2, InfoWrapper2
} from './InfoElements';
import { Row } from 'react-bootstrap';


const InfoSection=()=>
{
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return(
        <section id="info">
            <div className='about'>
                <InfoContainer lightBg = {false} id={"about"}>
                    <InfoWrapper>
                        <InfoRow imgStart={true}>
                            <Column2>
                                <div style={{ width: 500, height: 400 }}></div>
                            </Column2>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>About Us</TopLine>
                                    <Subtitle>{
                                        "Blulab Consulting is a consulting and technology firm operating in the Human Capital Management (HCM) and SaaS space. We specialize in helping organizations configure, implement, and optimize Dayforce and related HCM solutions, particularly in areas such as compensation, payroll, and HR processes."
                                    }</Subtitle>
                                    <Subtitle>{
                                        "We work closely with stakeholders across HR, IT, and Finance to streamline workflows, improve compliance, and ensure smooth system adoption. Our consulting style emphasizes clear communication, structured project management, and collaborative engagement, with regular updates, validation in test environments, and client-approved changes before production rollout."
                                    }</Subtitle>
                                </TextWrapper>
                            </Column1>
                            
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            </div>


            {/* <div className="resume">
            <InfoContainer lightBg = {true} id={"resume"} >
                <InfoWrapper2>
                    
                </InfoWrapper2>
            </InfoContainer>
            </div>

            <div className='works'>
                <InfoContainer lightBg = {false} id={"works"}>
                    <ProjectWrapper>
                    </ProjectWrapper>
                </InfoContainer>
            </div> */}
        </section>


    )
}

export default InfoSection