// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;








