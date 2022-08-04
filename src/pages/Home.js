import React from 'react'
import './home.css'
import home from '../images/bg-pic.jpg'
import Profile from './Profile'
const Home = () => {
  return (
    <div className='home-container'>
         <div className="home-wrapper">
            <div className="home">
              <img src={home} alt="swafi"/>
              <p>welcome and lets <br/>learn web development together</p>
            </div>
            <Profile />
            <div className="projects">
              <h3>welcome to Our Projects</h3>
              <div className="cards">
                <div className="project-card">
                  hello this is the project
                </div>
                <div className="project-card">
                  hello this is the project
                </div>
              </div>
              <div className="cards">
                <div className="project-card">
                  hello this is the project
                </div>
                <div className="project-card">
                  hello this is the project
                </div>
              </div>
              <div className="cards">
                <div className="project-card">
                  hello this is the project
                </div>
                <div className="project-card">
                  hello this is the project
                </div>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Home
