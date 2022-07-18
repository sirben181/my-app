import React from 'react'
// import { Link } from 'react-router-dom'
import './navbar.css'
import Sidebar from './Sidebar'
import {FcMenu} from 'react-icons/fc'
const Navbar = () =>{
  return (
    <div className='container'>
      {/* here need alogo on the right and then the navbar with -home 
      -projects -contacts*/}
       <div className='wrapper'>
        <div className="navbar-cont">
          <div className="logocont"><img src="" alt="sirben" /></div>
            <div className="navbar">
                <ul><li className='active'><a href='/#'>Home</a></li></ul>
                <ul><li><a href='/#'>Projects</a></li></ul>
                <ul><li><a href='/#'>Contact</a></li></ul>
                <ul><li><a href='/#'>About</a></li></ul>
            </div>
            <div className='sidebar-cont'>
              <div className="menu">
                 <FcMenu/>
              </div>
              <Sidebar/>
            </div>
        </div>
       </div>
      
    </div>
  )
}

export default Navbar
