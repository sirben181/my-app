import React from 'react'
import './about.css'
import Profile from './Profile'
const About = () => {
  return (
    <div className='about-container'>
      <div className="about-wrapper">
        <h1>About</h1>
         <div className='about'>
            <div className="about-header">
          <Profile/>
            </div>
            <div className='about'>
            <p> this is the best website for web devlopment stories and tips.
              This is just amazing and lets be okay with it.
            </p>
            <p>
              This has been inspired by paul
            </p>
            </div>
         </div>
      

      </div>
  
    </div>
  )
}

export default About
