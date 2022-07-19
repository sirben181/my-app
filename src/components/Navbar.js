import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import {SidebarData} from './SidebarData'
const Navbar = () =>{
  const[sidebar,setSidebar]=useState(false)
  
  return (
    <div className='container'>
      <div className="navbar">
          <div className="menu">
            <div className="menubars">
              <AiIcons.AiOutlineMenu className='menu-icon'/>
            </div>
            <div className="nav-menu">
               <ul className="nav-menu-lists">
               {SidebarData.map((item,index)=>{
                      return(
                      <li key={index}>
                          <Link to={item.path}> {item.icon} <span>{item.title}</span></Link>
                      </li>)
                    })}
               </ul>
            </div>

          </div>
          <div className={sidebar ? 'nav-menu active':'nav-menu'}>
               <ul className="sidebar-icon">
                    <li >
                      <Link to='#'>
                          <AiIcons.AiOutlineClose className="menu-icon" onClick={()=>setSidebar(!sidebar)}/>
                      </Link>
                    </li>
                    {SidebarData.map((item,index)=>{
                      return(
                      <li key={index}>
                          <Link to={item.path}> {item.icon} <span>{item.title}</span></Link>
                      </li>)
                    })}
                </ul>
          </div>
      </div>
    
    </div>
  )
}

export default Navbar
