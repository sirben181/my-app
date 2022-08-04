import Avatar from '@mui/material/Avatar'
import React from 'react'
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
                    <h3>who is bens</h3>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
