import React from 'react'
import './blog.css'
const Blog = () => {
  return (
    <div className='blog-container'>
      <div className="blog-wrapper">
        <div className="blog">
          <div className="blog-header">
           <h2>blog</h2>
          </div>
          <div className="blog-body">
            <div className="blog-content"></div>
            <div className="blog-footer">
              <div className="like"><p>Like</p></div>
              <div className="comment"><p>Like</p></div>
              <div className="like"><p>Like</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
