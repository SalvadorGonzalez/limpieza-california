import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../limpiea-california-logo.png';
import './NavigationBar.css';

const divStyle = {
  backgroundColor: '#F2F2F2',
};

const NavigationBar = () => (
  <nav className="navbar navbar-expand-md navbar-light" style={divStyle} id="main-navigation">
    <a href="#">
      <img src={logo} id="logo-limpieza"></img>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
      <div className="navbar-nav center text-center">
        <a className="nav-item nav-link active" href="#">Inicio <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">Servicios</a>
        <a className="nav-item nav-link" href="#">Contacto</a>
      </div>
    </div>
  </nav>
);

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;
