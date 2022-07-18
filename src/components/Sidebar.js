import React from 'react'
import { useState } from "react"
import './sidebar.css'
const Sidebar = () => {
  const [sideactive,setSideactive]=useState(false)
  return (
    <div className={sideactive ? 'sideactive' :'sideinactive'}>
        <div className="sidewrapper">
            <ul><li>Home</li></ul>
            <ul><li>Projects</li></ul>
            <ul><li>Contact</li></ul>
            <ul><li>About</li></ul>
        </div>
      
    </div>
  )
}

export default Sidebar
