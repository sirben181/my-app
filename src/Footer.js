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
                            <li><a  href='https://www.facebook.com/benson.kamau.3766' target='_blank'  rel="noreferrer"><BsIcons.BsFacebook className='fb'/></a></li>
                            <li><a href='https://twitter.com/benson_kamaa' target='_blank'  rel="noreferrer"><BsIcons.BsTwitter className='twita'/></a></li>
                            <li><a href='https://www.linkedin.com/in/benson-kamau-5b54911a5/' target='_blank'  rel="noreferrer"><BsIcons.BsLinkedin className='linked'/></a></li>
                            <li><a href='https://www.youtube.com' target='_blank'  rel="noreferrer"><BsIcons.BsYoutube className='youtube'/></a></li>
                            <li><a href='https://github.com/sirben181' target='_blank'  rel="noreferrer"><BsIcons.BsGithub className='github'/></a></li>
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
