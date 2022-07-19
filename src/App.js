
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Projects';
import Contacts from './pages/Contacts';
import About from './pages/About';

function App() {
  return (
    <>
 <Router>
 <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<Products/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
 </Router>
    </>
  );
}

export default App;
