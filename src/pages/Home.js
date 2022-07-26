import React from 'react'
import './home.css'
import home from '../images/bg-pic.jpg'
const Home = () => {
  return (
    <div className='home-container'>
         <div className="home-wrapper">
            <div className="home">
            <h2>Home</h2>
              <img src={home} alt="swafi"/>
            </div>
            <div className="projects">
              <h3>welcome <strong>Here</strong> are some of our projects that we have done so far</h3>
              <div className="project-card">
                hello this is the project
              </div>
            </div>
         </div>
    </div>
  )
}

export default Home
