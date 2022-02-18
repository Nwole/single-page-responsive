import './App.css';
import Header from './Components/Header/Header';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Contact from './Components/Pages/Contact/Contact';
import Policy from './Components/Pages/Policy/Policy';
import Footer from './Components/Pages/Footer/Footer'





function App() {
  return (
    <Router>
    <div className="App">
     <Header />
     <Routes>
       <Route path="/" exact element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/policy" element={<Policy />} />
     </Routes>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
