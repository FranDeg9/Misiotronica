import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Home.css";
import productImage2 from './image/detectordemovimientos.png';
import productImage3 from './image/estabilizador.png';
import productImage6 from './image/transformador.png';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenidos a Misiotronica</h1>
      <p className='text'><b>Descubre una amplia gama de productos electrónicos y tecnológicos para tu hogar y oficina.</b></p>
      <div className="special-offers">
        <h2>¡Ofertas y Descuentos!</h2>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
          <div>
            <div className="offer" >
              <a href='/venta'>
              <img className='image-size' src={productImage2} alt="Oferta 1"  />
              <p>¡Gran oferta en detector de movimientos! Aprovecha el descuento del 20%!!!</p>
              </a>
            </div>
          </div>
          <div>
            <div className="offer">
              <a href='/venta'>
              <img className='image-size' src={productImage3} alt="Oferta 2" />
              <p>¡No te pierdas la oferta en Estabilizadores! Compra uno y llévate el segundo a mitad de precio!!!.</p>
              </a>
            </div>
          </div>
          <div>
            <div className="offer">
            <a href='/venta'>
              <img className='image-size' src={productImage6} alt="Oferta 2" />
              <p>¡No te pierdas esta oportunidad y llevate tu transformador en cuotas sin interes!!!.</p>
            </a>
            </div>
          </div>
          {/* Agregar más ofertas */}
        </Carousel>
      </div>
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
