import React from 'react'
import './projects.css'
import  converter from '../images/projects/conver2.png'
import  andela from '../images/projects/Andela.png'
import  facebook from '../images/projects/facebook.png'
import  weather from '../images/projects/weather.png'
import  passwordgen from '../images/projects/passwordgen.png'
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
                 <div className="converter Andela_clone">
                    <h3>Andela clone</h3>
                    <div className="converter-body Andela_clone-body">
                        <img src={andela} alt="Andela clone" />
                           <p>This is Andela clone build using react. Its clone for a previous Andela clone.
                         </p>
                         <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://github.com/sirben181/andela-clone-app" target='_blank' rel="noreferrer">Github link</a></span>
                     </div>
                 </div>
                 <div className="converter weather_app">
                     <h3>Weather app</h3>
                    <div className="converter-body weather_app-body">
                        <img src={weather} alt="weather here" />
                         <p>This a weather app that you can enter a city and you get the weather of that certain city.
                              this is done using a little javascript to make the conversion
                         </p>
                         <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/myWeather_app" target='_blank' rel="noreferrer">Github link</a></span>
                    </div>
                 </div>
                 <div className="converter facebook_clone">
                    <h3>Facebook clone</h3>
                    <div className="converter-body facebook_clone-body">
                        <img src={facebook} alt="facebook  here" />
                        <p>This a facebook clone that you can loggin using the jwt authorization and there are feeds and using the firebase db.
                            this is done using a little javascript to make the conversion
                       </p>
                       <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/fb-clone" target='_blank' rel="noreferrer">Github link</a></span>
                   </div>
                 </div> 
                 <div className="converter passswordgen">
                      <h3>Password generator</h3>
                      <div className="converter-body passwordgen-body">
                          <img src={passwordgen} alt="password gen here" />
                            <p>This is password generator using javascript.
                                this is done using a little javascript to make the conversion
                            </p>
                            <span>Click here for the github link<ArrowRightAltIcon className='arrowicon'/> <a  href="https://www.github.com/sirben181/passwordgen" target='_blank' rel="noreferrer">Github link</a></span>
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