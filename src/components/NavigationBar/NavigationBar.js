import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../limpiea-california-logo.png';
import './NavigationBar.css';

const divStyle = {
  backgroundColor: '#F2F2F2',
};

const NavigationBar = () => (
  <nav className="navbar navbar-expand-md fixed-top navbar-light" style={divStyle} id="main-navigation">
    <a href="#">
      <img src={logo} id="logo-limpieza"></img>
    </a>
    <a href="tel:6827782" className="d-none d-block d-xl-none d-lg-none d-md-none">
      <i className="fas fa-phone"></i>
      <span id="phone-number">(664) 682-77-82</span>
    </a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
      <div className="navbar-nav center text-center">
        <a className="nav-item nav-link active" href="#">Inicio <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#servicios">Servicios</a>
        <a className="nav-item nav-link" href="#contacto">Contacto</a>
        <a href="tel:6827782" className="justify-content-center align-self-center">
          <i className="fas fa-phone"></i>
          <span id="phone-number">(664) 682-77-82</span>
        </a>
      </div>
    </div>
  </nav>
);

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;
