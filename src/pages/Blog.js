import React from 'react'
import './blog.css'
const Blog = ({ClickLike,comment,shareBlog}) => {
  return (
    <div className='blog-container'>
      <div className="blog-wrapper">
        <div className="blog">
          <div className="blog-header">
            <h2>How to create a length converter</h2>
          </div>
          <div className="blog-body">
            <div className="blog-content">
              <p>This will require three files .html, .css, .js files  
              that are linked together. Also you can the inline and internal 
               styling can be done and also js files can be written. 
               This is done using only js and it looks very cool

               This will require three files .html, .css, .js files  
              that are linked together. Also you can the inline and internal 
               styling can be done and also js files can be written. 
               This is done using only js and it looks very cool
               This will require three files .html, .css, .js files  
              that are linked together. Also you can the inline and internal 
               styling can be done and also js files can be written. 
               This is done using only js and it looks very cool
               This will require three files .html, .css, .js files  
              that are linked together. Also you can the inline and internal 
               styling can be done and also js files can be written. 
               This is done using only js and it looks very cool</p>
            </div>
            <div className="blog-footer"> 
              <div className="like"><button onClick={ClickLike}>Like</button></div>
              <div className="comment"><button onClick={comment}>comment</button></div>
              <div className="share"><button onClick={shareBlog}>share</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
