import React from 'react';
import './Service.css';
import error404 from './error404.jpg';


const Service = () => {
  return (
    <div className="service-container">
      <img
        className="background-image"
        src={error404}
        alt="Imagen de fondo"
      />
      {/*{<h1>error404</h1>}*/}
    </div>
  );
};

export default Service;
