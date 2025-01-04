import React from 'react'
import './home.css'
import home from '../images/bg-pic.jpg'
import converter from '../images/projects/conver2.png'
import Profile from './Profile'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home-container'>
         <div className="home-wrapper">
              <div className="home">
                  <img src={home} alt="swafi"/>
                  <p>welcome and lets <br/>learn web development <br/> together</p>
              </div>
                <Profile />
               <div className="home-projects">
                     <div className='home-projects-wrapper'>
                                <h3>welcome to <span>  Our Projects </span></h3>

                           <div className="home-cards">
                                  <div className='home-cards-wrapper'>
                                       <div className="card-container">
                                           <div className='card'>
                                              <div className="project-card-header">
                                                       <h3> The length converter</h3>
                                               </div>
                                               <div className="card-body">
                                                     <img src={converter} alt="is here" />
                                                     <Link to='/projects'>
                                                      <button className='btn-primary'>
                                                         Find out more
                                                      </button>
                                                       </Link> 
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="project-card-header">
                                                  <h3> hello this is the project </h3>
                                                 </div>
                                                 <div className="card-body">
                                                     <img src={converter} alt="is here" />
                                                     <Link to='/projects'>
                                                     <button className='btn-primary'>
                                                      Find out more
                                                     </button>
                                                     </Link> 
                                                 </div>
                                         </div>
                                   </div> 
                                       <div className="card-container">
                                           <div className='card'>
                                              <div className="project-card-header">
                                                       <h3> The length converter</h3>
                                               </div>
                                               <div className="card-body">
                                                     <img src={converter} alt="is here" />
                                                     <Link to='/projects'>
                                                      <button className='btn-primary'>
                                                         Find out more
                                                      </button>
                                                       </Link> 
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="project-card-header">
                                                  <h3> hello this is the project </h3>
                                                 </div>
                                                 <div className="card-body">
                                                     <img src={converter} alt="is here" />
                                                     <Link to='/projects'>
                                                     <button className='btn-primary'>
                                                      Find out more
                                                     </button>
                                                     </Link> 
                                                 </div>
                                          
                                        
                                           </div>
                                      </div> 
                            
                                       <div className="card-container">
                                           <div className='card'>
                                              <div className="project-card-header">
                                                       <h3> The length converter</h3>
                                               </div>
                                               <div className="card-body">
                                                     <img src={converter} alt="is here" />
                                                     <Link to='/projects'>
                                                      <button className='btn-primary'>
                                                         Find out more
                                                      </button>
                                                       </Link> 
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="project-card-header">
                                                  <h3> hello this is the project </h3>
                                                 </div>
                                                 <div className="card-body">
                                                     <img src={converter} alt="is here" />
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
                 </div>
               </div>
           </div>
  )
}

export default Home
