import React from 'react'
import { Link } from 'react-router-dom'
import Image from "/Users/Saurabh Sur/VAM/src/assets/images/—Pngtree—hacker coding with a keyboard_5426760.png"
import "../pages/home/home1.css"

const Mainheader = () => {
  return (
    <header className='main__header'>
      <div className='container main_header-container'>
     <div className="main_header_left">
     <h4>#100daysofCoding</h4>
     <h1>Join The Legends of The Code World</h1>
     <p>
     Welcome to CodeVam, your online hub for competitive coding excellence! Join our vibrant community of developers to learn, connect, collaborate, and network with like-minded coding enthusiasts.
     </p>
     <Link to ="/plans"className='btn lg' >Get Started</Link>
     </div>
     <div className="main_header_right">
      <div className="main_header_image">
        <img src={Image} alt="Main Header Image" />
     </div>
     </div>
    </div>
      </header>
  )
}

export default Mainheader
