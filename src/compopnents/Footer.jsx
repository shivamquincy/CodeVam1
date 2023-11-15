import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logy.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer>
    <div className='container footer_container'>
        <article>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Footer Logo" />
              </Link>
              <p>"Learn. Code. Collaborate. CodeVam - Your platform for tech innovation and collaboration. Join us on the journey to success!"</p>
              <div className='footer_socials'>
              <a href="https://www.linkedin.com/in/shivam-singh-a8481523b/" target='_blank' rel='noreff nopener'><FaLinkedin /></a>
              <a href="https://www.instagram.com/shivi.sngh/" target='_blank' rel='noreff nopener'><FaInstagram /></a>
              <a href="https://github.com/shivamquincy" target='_blank' rel='noreff nopener'><FaGithub /></a>
              </div>
        </article>
        <article className='linky'>
            <h4>PremaLinks</h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/community">Community</Link>
        </article>
    <article className='touche'>
            <h4>Get in Touch</h4>
           <Link to ="#" >Contact Us</Link>
        </article>
        </div>
    <div className="footer_copyright">
        <small>2023 VAM &copy; All Rights Reserved</small>
    </div>
   </footer>
  )
}

export default Footer
