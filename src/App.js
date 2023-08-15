import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Sale from './components/Sale';
import Contact from './components/Contact';
import Background from './components/Background';
import Service from './components/Service';



const App = () => {
  return (
    <Router>
      <Background/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/venta" element={<Sale />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/servicio" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;
