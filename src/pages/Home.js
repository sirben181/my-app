import React from 'react'
import './home.css'
import home from '../images/bg-pic.jpg'
import converter from '../images/projects/conver2.png'
import jsvalidation from '../images/projects/jsvalidation.png'
import andela from '../images/projects/Andela.png'
import facebook from '../images/projects/facebook.png'
import weather from '../images/projects/weather.png'
import passwordgen from '../images/projects/passwordgen.png'
import Profile from './Profile'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home-container'>
         <div className="home-wrapper">
                        <div className="home">
                                    <div className='home-image'>
                                            <img src={home} alt="swafi"/>
                                            <p>welcome and lets <br/>learn web development <br/> together</p>
                                    </div>
                                    <div className="home-profile">
                                        <Profile />
                                    </div> 
                        </div>
                        <div className="home-projects">
                               <div className='home-projects-wrapper'>
                                            <h3>welcome to <span>  Our Projects </span></h3>

                                        <div className="home-cards">
                                            <div className='home-cards-wrapper'>
                                                <div className="card-container">
                                                        <div className="card-wrapper"> 
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
                                                                        <img src={andela} alt="is here" />
                                                                        <Link to='/projects'>
                                                                        <button className='btn-primary'>
                                                                        Find out more
                                                                        </button>
                                                                        </Link> 
                                                                    </div>
                                                            </div>
                                                    
                                                        </div>
                                                        {/* <div className="card-wrapper"> 
                                                                
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
                                                                                        <h3> Password generator</h3>
                                                                                </div>
                                                                                <div className="card-body">
                                                                                        <img src={passwordgen} alt="is here" />
                                                                                        <Link to='/projects'>
                                                                                        <button className='btn-primary'>
                                                                                            Find out more
                                                                                        </button>
                                                                                        </Link> 
                                                                                    </div>
                                                                        </div>
                                                                            
                                                                  </div>
                                                                  <div className="card-wrapper"> 
                                                               
                                                                <div className="card">
                                                        
                                                                        <div className="project-card-header">
                                                                            <h3> hello this is the project </h3>
                                                                        </div>
                                                                        <div className="card-body">
                                                                                <img src={facebook} alt="is here" />
                                                                                <Link to='/projects'>
                                                                                    <button className='btn-primary'>
                                                                                            Find out more
                                                                                    </button>
                                                                                </Link> 
                                                                        </div>
                                                            
                                                                    </div>
                                                            
                                                         
                                                        
                                                            <div className='card'>
                                                                <div className="project-card-header">
                                                                        <h3> weather app</h3>
                                                                </div>
                                                                <div className="card-body">
                                                                        <img src={weather} alt="is here" />
                                                                        <Link to='/projects'>
                                                                        <button className='btn-primary'>
                                                                            Find out more
                                                                        </button>
                                                                        </Link> 
                                                                    </div>
                                                                    </div>
                                                                 </div>
                                                                    <div className="card-wrapper"> 
                                                
                                                                <div className="card">
                                                                    <div className="project-card-header">
                                                                    <h3> hello this is the project </h3>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <img src={jsvalidation} alt="is here" />
                                                                        <Link to='/projects'>
                                                                        <button className='btn-primary'>
                                                                        Find out more
                                                                        </button>
                                                                        </Link> 
                                                                    </div>
                                                            
                                                                </div>
                                                          </div>*/}
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
