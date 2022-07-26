import React from 'react'
import {Link} from 'react-router-dom'
import *as BsIcons from 'react-icons/bs'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-wrapper">
            <div className="footer-header">
                <h2>bens dev</h2>
            </div>
            <div className="footer">
                <div className="footer-links">
                    <div className="support">
                        <ul>
                            <li><Link  to='#'>Donate</Link></li>
                            <li><Link to='#'>collaborate</Link></li>
                            <li><Link to='#'>support</Link></li>
                        </ul>
                    </div>
                    <div className="support">
                        <ul>
                            <li><Link  to='#'>hire us</Link></li>
                            <li><Link to='#'>contact us</Link></li>
                            <li><Link to='#'>about us</Link></li>
                        </ul>
                    </div>
                    <div className="support">
                        <ul>
                            <li><Link  to='#'>Affliation</Link></li>
                            <li><Link to='#'>collaborate</Link></li>
                            <li><Link to='#'></Link></li>
                        </ul>
                    </div>
                </div>
                    <div className="social">
                        <ul>
                            <li><Link  to='www.facebook.com/benson.kamau.3766' target='_blank'><BsIcons.BsFacebook className='fb'/></Link></li>
                            <li><Link to='https://twitter.com/benson_kamaa'><BsIcons.BsTwitter className='twita'/></Link></li>
                            <li><Link to='https://www.linkedin.com/in/benson-kamau-5b54911a5/'><BsIcons.BsLinkedin className='linked'/></Link></li>
                            <li><Link to='www.youtube.com'><BsIcons.BsYoutube className='youtube'/></Link></li>
                            <li><Link to='https://github.com/sirben181'><BsIcons.BsGithub className='github'/></Link></li>
                        </ul>
                    </div>
              
            </div>
            <div className="copyright">
                <small>copyright &copy; 2022</small>
            </div>
           
        </div>
      
    </div>
  )
}

export default Footer
