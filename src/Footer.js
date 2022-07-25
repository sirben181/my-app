import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-wrapper">
            <div className="footer-header">
                <h2>footer</h2>
            </div>
            <div className="footer">
                <div className="footer-links">
                    <div className="support">
                        <ul>
                            <li><Link  to='#'>Affliation</Link></li>
                            <li><Link to='#'>collaborate</Link></li>
                            <li><Link to='#'>Donate</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <ul>
                            <li><Link  to='#'>Affliation</Link></li>
                            <li><Link to='#'>collaborate</Link></li>
                            <li><Link to='#'>Donate</Link></li>
                        </ul>
                    </div>
                    <div className="support">
                        <ul>
                            <li><Link  to='#'>Affliation</Link></li>
                            <li><Link to='#'>collaborate</Link></li>
                            <li><Link to='#'>Donate</Link></li>
                        </ul>
                    </div>
                </div>
                    <div className="social">
                        <ul>
                            <li><Link  to='#'>facebook</Link></li>
                            <li><Link to='#'>Twitter</Link></li>
                            <li><Link to='#'>LinkedIn</Link></li>
                            <li><Link to='#'>Youtube</Link></li>
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
