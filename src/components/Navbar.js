import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; 
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLinkClick = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    const handleScroll = () => {

      if (showSidebar && window.scrollY > 0) {
        setShowSidebar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showSidebar]);

  return (
    <>
      <nav className="navbar-container">
        <div className="menu-button-container">
          <button
            className="menu-toggle"
            type="button"
            onClick={handleToggleSidebar}
          >
            <FiMenu size={24} />
          </button>
        </div>
        <div className="container">
          <div className="logo-center">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" onClick={handleLinkClick}>
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link to="/venta" onClick={handleLinkClick}>
              Venta
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={handleLinkClick}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/servicio" onClick={handleLinkClick}>
              Servicio Tecnico
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
