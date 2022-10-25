import React from 'react'
import "./Footer.css"
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footerIcons">
        <a href="#"><FaYoutube/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaFacebookF/></a>
        <a href="#"><FaTwitter/></a>
        <a href="#"><FaLinkedinIn/></a>
      </div>
    </footer>
  )
}

export default Footer