import Avatar from '@mui/material/Avatar'
import React from 'react'
import './profile.css'
const Profile = () => {
  return (
    <div className='profile-container'>
        <div className="profile-wrapper">
            <div className="profile">
                <div className="header">
                    <Avatar />
                    <h3>Benson kamau</h3>
                </div>
                <div className="profile-story">
                    <h3>who is ben</h3>
                    <div className="profile-body">
                       <p>
                        i started coding in the covid era june of 2021.Having worked in the constructio industry for <br />
                         some times after graduating from college having a bachelor degree in biochemistry. <br />
                         here is the best thing that has ever happened to my life. got into my passion <br />
                          something that i just wish i would have started early.
                          i was working in construction when i decided to do something that was in my <br />
                           mind for so long.
                           So i just started to do what i felt like i doing and wanted to do for so long. <br />
                            I quitted the job i was doing at the time and i had to starting to learn what the hell is coding.
                            i started running just like othjer guys do with html,css and js and then frameworks and a few databases.
                        
                        </p> 
                        <h3>Technologies and skills</h3>
                        <h4>Reactjs</h4> <h4>javascript</h4> <h4>Nodejs</h4> <h4>express</h4>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
