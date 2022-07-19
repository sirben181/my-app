import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
const Navbar = () =>{
  
  return (
    <div className='container'>
      <div className="navbar">
        <div className="menu">
          <div className="menubars">
            <AiIcons.AiOutlineMenu className='menu-icon'/>
          </div>
          <div className="nav-menu"></div>

        </div>
        <div className="sidebar">
          <ul className="sidebar-icon">
            <li ><AiIcons.AiOutlineClose className="menu-icon"/></li>
          </ul>
          <ul className="sidebar-items">
            {SidebarData.map((item)=>{
              <li key={}></li>
            })}
          </ul>
        </div>
      </div>
    
    </div>
  )
}

export default Navbar
