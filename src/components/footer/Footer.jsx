/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nattpong Phoorisri</a>

      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portpolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/nattpong.puarisri"><FaFacebookF/></a>
        <a href="https://www.instagram.com/mind_nattpong/"><BsInstagram/></a>  
        <a href="https://twitter.com/MindStudio3"><FiTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Nattpong Phoorisri</small>
      </div>
    </footer>
  )
}

export default Footer