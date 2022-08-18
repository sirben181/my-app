import React from 'react'
import './blog.css'
const Blog = () => {
  return (
    <div className='blog-container'>
      <div className="blog-wrapper">
        <div className="blog">
          <div className="blog-header">
            <h2>How to create a length converter</h2>
          </div>
          <div className="blog-body">
            <div className="blog-content">
              <p>This will require three files .html, .css, .js files <br /> 
              that are linked together. Also you can the inline and internal <br />
               styling can be done and also js files can be written. <br />
               This is done using only js and it looks very cool</p>
            </div>
            <div className="blog-footer"> 
              <div className="like"><p>Like</p></div>
              <div className="comment"><p>comment</p></div>
              <div className="share"><p>share</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
