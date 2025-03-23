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
            <div className='blog-body-wrapper'>
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
                          <div className="footer-btn-wrapper">
                                <div className="blog-footer-btns">
                                  <div className="likeclass">
                                      <button  className="like"onClick={ClickLike}>Like</button>

                                  </div>
                                  <div className="commentclass">
                                      <input className="comment" type='input'/>
                                      <button className="comment" onClick={comment}>comment</button>
                                          
                                  </div>
                                  <div className="shareclass">
                                      <button  className="share" onClick={shareBlog}>share</button>
                                  </div>
                                </div>
                          </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
