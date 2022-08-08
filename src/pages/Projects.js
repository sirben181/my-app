import React from 'react'
import './projects.css'
import  converter from '../images/projects/conver2.png'
const Projects = () => {
  return (
    <div className='project-container'>
      <div className="project-wrapper">
      <h1>Projects</h1>
      <div className='projects-container'>
        <div className="projects">
          <div className="converter">
            <h3>Length converter</h3>
            <div className="converter-body">
              <img src={converter} alt="converter here" />
              <a  href="https://www.github.com/sirben181/converter" target='_blank' rel="noreferrer">Github link</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <p></p>
    </div>
  )
}

export default Projects
