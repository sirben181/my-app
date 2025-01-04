
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Products from './pages/Projects';
import Blog from './pages/Blog';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './Footer';
import { useState,useEffect } from 'react';

function App() {
  const Like=useState(0)
  const ClickLike=(e)=>{
e.preventDefault()
// useState()
    console.log('Like')
  }
  const comment=()=>{
    console.log('comment')
  }
  const shareBlog=()=>{
    console.log('share')
  }
  return (
    <>
 <Router>
 <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blog ClickLike={ClickLike}
        comment={comment}
        shareBlog={shareBlog}/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
 </Router>
    </>
  );
}

export default App;
