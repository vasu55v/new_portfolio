import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <center>
   <nav className='nav_container'>
    <ul className='nav_list'>
        <li><a href="">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skill">Skills</a></li>
    </ul>
   </nav>
   </center>
  )
}

export default Navbar