import React from 'react'
import './about.css'
import Profile from './Profile'
const About = () => {
  return (
    <div className='about-container'>
      <div className="about-wrapper">
        <h1>About</h1>
         <div className='about-body'>
          <Profile/>
            <p> this is the best website for web devlopment stories and tips.
              This is just amazing and lets be okay with it.
            </p>
         </div>
      

      </div>
  
    </div>
  )
}

export default About
