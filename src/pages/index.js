import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';
import './index.css'

import oficinas from './img/limpieza-oficinas.jpg';
import mantenimiento from './img/limpieza-mantenimiento.jpg';
import obra from './img/limpieza-obra.jpg';
import industrial from './img/limpieza-industrial.jpg';
import sillon from './img/limpieza-sillon.jpg';
import garantia from './img/garantia.png';
import experiencia from './img/experiencia.png';

const Index = () =>(
    <div>
            <NavigationBar />

            
                <div className="row">
                    <div className="header-image">
                            <div className="headline">
                            <div className="headline-content">
                                <h1>Limpieza California</h1>
                                <h2>Especialistas En Limpieza</h2>
                            </div>
                            
                            <img className="garantia-sello" src={garantia}></img>
                        </div>
                    </div>

                <div className="row ">
                    <div className="featurette col-xs-12 col-sm-6 col-md-4 col-lg-4" id="about">
                    <hr className="featurette-divider" />
                        <img className="featurette-image img-circle img-responsive pull-right" src={oficinas}></img>
                        <h2 className="featurette-heading">Limpieza Diaria De Oficinas
                            <span className="text-muted"> Con Personal Permanente O Parcial.</span>
                        </h2>
                        <p className="lead">Con Servicio A Jornada Completa O Parcial.</p>
                    </div>

                    <div className="featurette col-xs-12 col-sm-6 col-md-4 col-lg-4" id="services">
                        <hr className="featurette-divider" />
                        <img className="featurette-image img-circle img-responsive pull-left" src={mantenimiento}></img>
                        <h2 className="featurette-heading">Limpieza De Mantenimiento
                            <span className="text-muted"> Regular Y A Fondo.</span>
                        </h2>
                        <p className="lead">Segun Las Necesidades De Nuestros Clientes.</p>
                    </div>

                    <div className="featurette col-xs-12 col-sm-6 col-md-4 col-lg-4" id="contact">
                        <hr className="featurette-divider" />
                        <img className="featurette-image img-circle img-responsive pull-right" src={obra}></img>
                        <h2 className="featurette-heading">Limpieza Industrial
                            <span className="text-muted"> Programado y Puntual.</span>
                        </h2>
                        <p className="lead">Desarrollando un plan de trabajo adecuado a su Empresa.</p>
                    </div>

                    <div className="featurette col-xs-12 col-sm-6 col-md-6 col-lg-6" id="contact">
                        <hr className="featurette-divider" />
                        <img className="featurette-image img-circle img-responsive pull-left" src={industrial}></img>
                        <h2 className="featurette-heading">Limpieza Final De Obra
                            <span className="text-muted"> Terminadas Y En Operacion.</span>
                        </h2>
                        <p className="lead">Logrando habitabilidad al instante concluida la limpieza.</p>
                    </div>

                    <div className="featurette col-xs-12 col-sm-12 col-md-6 col-lg-6" id="contact">
                        <hr className="featurette-divider" />
                        <img className="featurette-image img-circle img-responsive pull-right" src={sillon}></img>
                        <h2 className="featurette-heading">Limpieza Y Desmanchado
                            <span className="text-muted"> De Alfombras, Sillas y Sillones.</span>
                        </h2>
                        <p className="lead">Servicio realizado con el metodo mas avanzado en limpieza a vapor, utilizado productos efectivos en eliminacion de bacterias, manchas y olores.</p>
                    </div>

                </div>

            </div>

            
            
            

                

                

                
            <Footer />
    </div>
);

export default Index;