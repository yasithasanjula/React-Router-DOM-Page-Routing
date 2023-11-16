import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import react from 'react'
import './App.css'

import Navbar from './Components/Header/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';
import Services from './Pages/Services/Services.jsx';

function App() {

  return (
    <>
      <div>
      
      
    <Router>
        <Navbar />
          
           <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route exact path='/Contact' element={<Contact />}/>
              <Route exact path='/Portfolio' element={<Portfolio />}/>
              <Route exact path='/Services' element={<Services />}/>
           </Routes>
        <Footer/>
          
    </Router>
      </div>
        
        
    </>
  )
}

export default App
