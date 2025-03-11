import React from 'react'
import './about.css'
import Profile from './Profile'
const About = () => {
  return (
    <div className='about-container'>
        <div className="about-wrapper">
              <h1>About</h1>
              <div className='about'>
                          <div className='about-header'>
                            <div className='about-header-wrapper'>
                                <Profile/>
                            </div>
                          </div>
                          <div className='about-body'>
                                <div className='about-body-wrapper'>
                                        <div className='form-container'>
                                            <div className='form-wrapper'>
                                                <div className='form'>
                                                    <div className='form-header'>
                                                       <h2>DO U LIKE THIS THIS WEBSITE AND WANT SOMETHING LIKE IT?
                                                        <br/> DO U WANT SOMETHING FROM SCRATCH?
                                                       <br/> DO U HAVE A DESIGN AND NEEDS IT ACTUALIZED INTO A WEBSITE?
                                                       </h2>
                                                        <h3>
                                                           IF YES THEN LETS KNOW BY FILLING THE FORM BELOW.
                                                        </h3>
                                                    </div>
                                                    <div className='form-body'id='form'action='#'>
                                                        <div className='form-body-wrapper'>
                                                            <label> ENTER YOUR NAME
                                                              <input type='text'  placeholder='YOUR NAME'/></label> 
                                                              <label>ENTER YOUR EMAIL
                                                                <input type='text' placeholder='YOUR EMAIL'/>
                                                              </label>
                                                              <label>ENTER YOUR DESCRIPTION
                                                                <textarea type='markup' placeholder='THE DESCRIPTION OF MESSAGE'/>
                                                              </label>
                                                              <button type='submit'>SUBMIT</button>
                                                        </div>

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

export default About
