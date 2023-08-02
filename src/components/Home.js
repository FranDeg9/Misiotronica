import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenidos a Misotronica</h1>
      <div className="search-bar">
        <input type="text" placeholder="Buscar productos..." />
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default Home;
