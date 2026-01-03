import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Video from '../../videos/video1.mp4'
import { Button } from '../ButtonElement'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HerobtnWrapper, ArrowForward, ArrowRight } from './HeroElement'
import { FaLinkedin } from 'react-icons/fa';
import { SocialIconLink, SocialMedia, SocialLogo, WebsiteRights, SocialIcons, SocialMediaWrap } from './HeroElement';
import { Column1, Column2 } from '../InfoSection/InfoElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video1/mp4' />
            </HeroBg>
            
            <HeroContent  imgStart={true}>
                {/* <HeroH1>Blulab Consulting</HeroH1> */}
                <HeroP style={{}}>
                    We believe in efficiency, transparency and long-term growth, for our clients.
                </HeroP>
            
                {/* <SocialIcons>
                    <SocialIconLink href="//www.linkedin.com/company/blulabconsulting/" target="_blank"
                        aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons> */}
                

                </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection