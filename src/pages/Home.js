import React from 'react'
import './home.css'
import home from '../images/bg-pic.jpg'
import Profile from './Profile'
import { Link } from 'react-router-dom'
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
                            <div className="project-card-header">
                                <h3> hello this is the project </h3>
                              </div>
                              <div className="card-body">
                                <img src="" alt="is here" />
                                  <Link to='/projects/project-1'>
                                <button className='btn-primary'>
                                    Find out more
                                  </button>
                                  </Link> 
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-card-header">
                                <h3> hello this is the project </h3>
                              </div>
                              <div className="card-body">
                                <img src="" alt="is here" />
                                  <Link to='/projects/project-2'>
                                <button className='btn-primary'>
                                    Find out more
                                  </button>
                                  </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="project-card">
                            <div className="project-card-header">
                                <h3> hello this is the project </h3>
                              </div>
                              <div className="card-body">
                                <img src="" alt="is here" />
                                  <Link to='/projects/project-3'>
                                <button className='btn-primary'>
                                    Find out more
                                  </button>
                                  </Link> 
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-card-header">
                                <h3> hello this is the project </h3>
                              </div>
                              <div className="card-body">
                                <img src="" alt="is here" />
                                  <Link to='/projects/project-4'>
                                <button className='btn-primary'>
                                    Find out more
                                  </button>
                                  </Link> 
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="project-card">
                            <div className="project-card-header">
                                <h3> hello this is the project </h3>
                              </div>
                              <div className="card-body">
                                <img src="" alt="is here" />
                                  <Link to='/projects'>
                                <button className='btn-primary'>
                                    Find out more
                                  </button>
                                  </Link> 
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-card-header">
                                <h3> hello this is the project </h3>
                              </div>
                              <div className="card-body">
                                <img src="" alt="is here" />
                                  <Link to='/projects'>
                                <button className='btn-primary'>
                                    Find out more
                                  </button>
                                  </Link> 
                            </div>
                        </div>
                    </div>
               </div>
         </div>
    </div>
  )
}

export default Home
