import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenidos a Misiotronica</h1>
      
      <p className='text'><b>Descubre una amplia gama de productos electrónicos y tecnológicos para tu hogar y oficina.</b></p>
      
      <div className="social-links">
        <h3>Nuestras Redes Sociales</h3>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      
      <div className="quick-links">
        <a href="/venta">Productos en Venta</a>
        <a href="/sobre-nosotros">Sobre Nosotros</a>
        <a href="/contacto">Contacto</a>
      </div>
    </div>
  );
};

export default Home;
