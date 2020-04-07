import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';
import './index.css'

import oficinas from './img/limpieza-oficinas.jpg';
import mantenimiento from './img/limpieza-mantenimiento.jpg';
import obra from './img/limpieza-obra.jpg';
import industrial from './img/limpieza-industrial.jpg';
import sillon from './img/limpieza-sillon.jpg';

const Index = () =>(
    <div>
        <NavigationBar />
        <h1>Index page</h1>
        <hr className="featurette-divider" />
            <div className="featurette" id="about">
                <img className="featurette-image img-circle img-responsive pull-right" src={oficinas}></img>
                <h2 className="featurette-heading">Limpieza Diaria De Oficinas
                    <span className="text-muted">Con Personal Permanente O Parcial.</span>
                </h2>
                <p className="lead">Con personal Permanente A Jornada Completa O Jornada Parcial.</p>
            </div>

            <hr className="featurette-divider" />

            <div className="featurette" id="services">
                <img className="featurette-image img-circle img-responsive pull-left" src={mantenimiento}></img>
                <h2 className="featurette-heading">Limpieza De Mantenimiento
                    <span className="text-muted">Regular Y A Fondo.</span>
                </h2>
                <p className="lead">Segun Las Necesidades De Nuestros Clientes.</p>
            </div>

            <hr className="featurette-divider" />

            <div className="featurette" id="contact">
                <img className="featurette-image img-circle img-responsive pull-right" src={obra}></img>
                <h2 className="featurette-heading">Limpieza Industrial
                    <span className="text-muted">Programado y Puntual.</span>
                </h2>
                <p className="lead">Desarrollando un plan de trabajo adecuado a su Empresa.</p>
            </div>

            <hr className="featurette-divider" />

            <div className="featurette" id="contact">
                <img className="featurette-image img-circle img-responsive pull-left" src={industrial}></img>
                <h2 className="featurette-heading">Limpieza Final De Obra
                    <span className="text-muted">Terminadas Y En Operacion.</span>
                </h2>
                <p className="lead">Logrando habitilidad al instante concluida la limpieza.</p>
            </div>

            <hr className="featurette-divider" />

            <div className="featurette" id="contact">
                <img className="featurette-image img-circle img-responsive pull-right" src={sillon}></img>
                <h2 className="featurette-heading">Limpieza Y Desmanchado
                    <span className="text-muted">De Alfombras, Sillas y Sillones.</span>
                </h2>
                <p className="lead">Servicio realizado con el metodo mas avanzado en limpieza a vapor, utilizado productos efectivos en eliminacion de manchas y olores.</p>
            </div>
            <hr className="featurette-divider" />
        <Footer />
    </div>
);

export default Index;