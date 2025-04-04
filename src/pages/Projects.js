import React from 'react'
import './projects.css'
import  converter from '../images/projects/conver2.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
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
                         <p>This converter converts length from the smallest unit that is commonly used. You can convert from mm all the way to the mile.
                            You can interconvert  them anyhowly.
                            this is done using a little javascript to make the conversion
                        </p>
                        <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/converter" target='_blank' rel="noreferrer">Github link</a></span>
                      </div>
                 </div>
                 <div className="converter">
                    <h3>Length converter</h3>
                    <div className="converter-body">
                        <img src={converter} alt="converter here" />
                           <p>This converter converts length from the smallest unit that is commonly used. You can convert from mm all the way to the mile.
                             You can interconvert  them anyhowly.
                            this is done using a little javascript to make the conversion
                         </p>
                         <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/converter" target='_blank' rel="noreferrer">Github link</a></span>
                     </div>
                 </div>
                 <div className="converter">
                     <h3>Length converter</h3>
                    <div className="converter-body">
                        <img src={converter} alt="converter here" />
                         <p>This converter converts length from the smallest unit that is commonly used. You can convert from mm all the way to the mile.
                              You can interconvert  them anyhowly.
                              this is done using a little javascript to make the conversion
                         </p>
                         <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/converter" target='_blank' rel="noreferrer">Github link</a></span>
                    </div>
                 </div>
                 <div className="converter">
                    <h3>Length converter</h3>
                    <div className="converter-body">
                        <img src={converter} alt="converter here" />
                        <p>This converter converts length from the smallest unit that is commonly used. You can convert from mm all the way to the mile.
                            You can interconvert  them anyhowly.
                            this is done using a little javascript to make the conversion
                       </p>
                       <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/converter" target='_blank' rel="noreferrer">Github link</a></span>
                   </div>
                 </div> 
                 <div className="converter">
                      <h3>Length converter</h3>
                      <div className="converter-body">
                          <img src={converter} alt="converter here" />
                            <p>This converter converts length from the smallest unit that is commonly used. You can convert from mm all the way to the mile.
                                You can interconvert  them anyhowly.
                                this is done using a little javascript to make the conversion
                            </p>
                            <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/converter" target='_blank' rel="noreferrer">Github link</a></span>
                     </div>
                 </div> 
                 <div className="converter">
                        <h3>Length converter</h3>
                        <div className="converter-body">
                          <img src={converter} alt="converter here" />
                          <p>This converter converts length from the smallest unit that is commonly used. You can convert from mm all the way to the mile.
                          You can interconvert  them anyhowly.
                          this is done using a little javascript to make the conversion
                          </p>
                        <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/converter" target='_blank' rel="noreferrer">Github link</a></span>
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
// db: have a collections of projects which will be fetched to the posts page..such that they will be fetched in an assending order so that the oldest will be the bottom.
  // we can have a featured posts--to be display into the home page- this should be like a simple posts thing
  // in the db we can have a collection where by we fetch the profile and the home page too..
  // a collections of blogs...
  //