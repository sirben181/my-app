
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Products from './pages/Projects';
import Blog from './pages/Blog';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './Footer';

function App() {
  return (
    <>
 <Router>
 <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
 </Router>
    </>
  );
}

export default App;
