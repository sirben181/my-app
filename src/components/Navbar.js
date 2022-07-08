import React from 'react'
// import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='container'>
      {/* here need alogo on the right and then the navbar with -home 
      -projects -contacts*/}
       <div className='wrapper'>
        <div className="navbar-cont">
          <div className="logocont">sirben</div>
          <div className="navbar">
          <ul><a href='#'>Home</a></ul>
          <ul><a href='#'>Projects</a></ul>
          <ul><a href='#'>Contact</a></ul>
          <ul><a href='#'>About</a></ul>
          </div>
        </div>
       </div>
      
    </div>
  )
}

export default Navbar
