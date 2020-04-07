import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = () => (
  <footer id="footer-b">
    <div className="row" id="footer-first-column">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 text-center">
        <p><strong>Horario</strong></p>
        <ul className="list-unstyled">
            <li>Lunes - Sabado: 7am - 5pm</li>
            <li>Domingo Cerrado</li>
            <li></li>
        </ul>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 text-center">
        <p><strong>Menu</strong></p>
        <ul className="list-unstyled">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center hidden-xs">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.3350595059037!2d-116.96808988503571!3d32.517197081051194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947f2488292bd%3A0x23bb03bfcb7fa2f8!2sLimpieza%20California!5e0!3m2!1ses-419!2smx!4v1569285996925!5m2!1ses-419!2smx"  height="300" frameBorder="0" id="frame-map" allowFullScreen=""></iframe>
        </div>
    </div>
        
    <div className="row">
        <div className="col-lg-12 text-center">
            <p>Copyright &copy; Limpieza California 2018</p>
        </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
