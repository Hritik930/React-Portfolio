import React from 'react'
import './Contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1><span>C</span>ONTACT-US</h1>
        <div className="contact-icon" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <a href='https://www.instagram.com/' target='_blank' className="items"><FaInstagram className='icons' style={{color:"#B52C5E"}}/></a>
          <a href='https://whatsapp.com/' target='_blank' className="items"><FaWhatsapp className='icons' style={{color:"#508352"}}/></a>
          <a href='https://www.linkedin.com/in/sahil-kasaudhan-7558252a1' target='_blank' className="items"><FaLinkedin className='icons' style={{color:"#275C98"}}/></a>
          <a href='https://twitter.com/Sahilk930' target='_blank' className="items"><BsTwitterX className='icons' style={{color:"#C3C3C3"}}/></a>
          <a href='https://github.com/Hritik930' target='_blank' className="items"><FaGithub className='icons' style={{color:"#607D8B"}}/></a>
          <a href='mailto:hritikblcm@gmail.com' target='_blank' className="items"><SiGmail className='icons' style={{color:"#691818"}}/></a>
        </div>
      </div>
    </>
  )
}

export default Contact
