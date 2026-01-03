import React from 'react'
import { Button } from '../ButtonElement';
import { FiMail } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

import {
    ContactContainer, Title, Message, MailIcon, Form, ContactRow, ContactWrapper, Column1, Column2, Sizing, ContactInfo
} from './ContactElements';

const ContactSection =({id, spot}) => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_28mz73q', 'template_g4lmc3p', e.target, 'bUIg9CBd-UUlvsapb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

    }
    return (
        <>
            <ContactContainer id={id}>
                
                <ContactWrapper>
                        
                    <ContactRow spot = {spot}>
                        {/* <Column1>
                            <Title>
                                Contact Info
                            </Title>
                            <ContactInfo>
                                Email: ??????????@example.com
                            </ContactInfo>
                            <ContactInfo>
                                Phone: ???-???-????
                            </ContactInfo>
                        </Column1> */}
            
                        <Column2>
                            <Form>
                                <Message>
                                    Have questions? Fill out the form below and we’ll be happy to get in touch.
                                </Message>
                                <form id="contact-form" onSubmit={sendEmail}>
                                    <div className ="forms" >
                                        <div className="form-group" >
                                            <input id="name" type="text"  className="form-control" placeholder="Name*" name="name" style={{width: "400px", height: "40px", fontSize: "20px"}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address*" name="email"style={{width: "400px", height: "40px", fontSize: "20px"}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" name="subject"style={{width: "400px", height: "40px", fontSize: "20px"}}/>
                                        </div>
                                        <div className="form-group" style={{padding: "3px"}}>
                                            <textarea className="form-control" id="" cols="30" rows="8" placeholder='Your Message*' name="message" style={{width: "400px", height: "250px", fontSize: "20px"}}></textarea>
                                        </div>
                                        <div className="col-8">
                                            <input type="submit" className="btn btn-info" value="Send Message" style={{width: "400px", height: "40px", fontSize: "20px"}}></input>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default ContactSection