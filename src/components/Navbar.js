import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; 
import './Navbar.css';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLinkClick = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <nav className="navbar-container navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="menu-toogle"
            type="button"
            onClick={handleToggleSidebar}
          >
            <FiMenu size={24} />
          </button>
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
