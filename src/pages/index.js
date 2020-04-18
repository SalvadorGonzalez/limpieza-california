import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';
import './index.css'

import nebulazacion from './img/nebulizacion.jpg';
import oficinas from './img/limpieza-oficinas.jpg';
import mantenimiento from './img/limpieza-mantenimiento.jpg';
import obra from './img/limpieza-obra.jpg';
import industrial from './img/limpieza-industrial.jpg';
import sillon from './img/limpieza-sillon.jpg';
import garantia from './img/garantia.png';
import experiencia from './img/experiencia.png';
import mantenimiento0 from './img/mantenimiento-0.png';
import mantenimiento1 from './img/mantenimiento-1.png';
import mantenimiento2 from './img/mantenimiento-2.png';
import mantenimiento3 from './img/mantenimiento-3.png';

import vapor0 from './img/vapor-0.png';
import vapor1 from './img/vapor-1.png';
import vapor2 from './img/vapor-2.png';
import vapor3 from './img/vapor-3.png';

import piso1 from './img/piso-1.png'
import piso2 from './img/piso-2.png'
import piso3 from './img/piso-3.png'

const handle_form = () =>{
    return "Hola Limpieza California, Mi nombre es "
}

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

                 <div className="row col-12 fixed-phrase">
                     <p className='lead col-12'>Contamos con mas de 30 años de experiencia, establecidos en Tijuana B.C.</p>
                     
                     <img className="img-center-fix" src={experiencia}></img>
                 </div>
                        

                <div className="row ">
                    <div className="featurette col-xs-12 col-sm-6 col-md-4 col-lg-4" id="about">
                        <hr className="featurette-divider" />
                        <img className="featurette-image img-circle img-responsive pull-right" src={nebulazacion}></img>
                        <h2 className="featurette-heading">Desinfección por Nebulización
                            <span className="text-muted"> Eliminación de virus y bacterias.</span>
                        </h2>
                        <p className="lead">Por Vía Vérea a Superficies.</p>
                    </div>

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
                        <h2 className="featurette-heading">Limpieza Y Mantenimiento
                            <span className="text-muted"> Regular Y A Fondo.</span>
                        </h2>
                        <p className="lead">Segun Las Necesidades De Nuestros Clientes.</p>
                    </div>

                    <div className="featurette col-xs-12 col-sm-6 col-md-6 col-lg-6" id="contact">
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
                
                <div id="servicios" className="row padding-fixed">
                    <hr className="featurette-divider divider-width" />
                    <h2 className="featurette-heading col-12">Servicio de Mantenimiento</h2>
                    <p className="lead col-12">Elementos y/o grupos capacitados para la realización diaria, semanal o eventual que su establecimiento requiere.</p>
                    <ul className="col-6 extra-padding">
                        <li>Maquiladoras</li>
                        <li>Oficinas</li>
                        <li>Negocios</li>
                        <li>Escuelas</li>
                        <li>Comercio</li>
                        <li>Hospitales</li>
                        <li>Terminado de obra</li>
                    </ul>
                    
                    <img src={mantenimiento0} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    
                    <p className="lead col-12">Le ofrecemos el mejor plan de acuerdo a sus necesidades de limpieza.</p>
                    <img src={mantenimiento1} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    <img src={mantenimiento2} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    <img src={mantenimiento3} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    
                </div>

                <div className="row padding-fixed">
                    <hr className="featurette-divider divider-width" />
                    <h2 className="featurette-heading col-12">Lavado a Vapor</h2>
                    <p className="lead col-12">Limpieza a vapor y con productos germicidas para la eliminación de ácaros de:</p>
                    <ul className="col-6 extra-padding">
                        <li>Alfombras</li>
                        <li>Sillones</li>
                        <li>Sillas</li>
                        <li>Colchones</li>
                        <li>Tapetes</li>
                        <li>Interior de autos</li>
                    </ul>
                    
                    <img src={vapor0} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    
                    <p className="lead col-12">Le ofrecemos el mejor plan de acuerdo a sus necesidades de limpieza.</p>
                    <img src={vapor1} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    <img src={vapor2} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    <img src={vapor3} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    
                </div>

                <div className="row padding-fixed">
                    <hr className="featurette-divider divider-width" />
                    <h2 className="featurette-heading col-12">Pisos</h2>
                    <p className="lead col-12">Lavado, encerado y abrillantado</p>
                    <ul className="col-6 extra-padding">
                        <li>Tile</li>
                        <li>Mármol</li>
                        <li>Granito</li>
                        <li>Duela</li>
                        <li>Loseta</li>
                        <li>Cemento</li>
                        <li>Epóxido</li>
                    </ul>
                    
                    
                    <p className="lead col-12">Con productos de calidad normales y antiestáticos.</p>
                    <img src={piso1} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    <img src={piso2} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    <img src={piso3} alt="jabkdjas" className="img-thumbnail width-fix"></img>
                    
                </div>

                <div id="contacto" className="row padding-fixed form-section">
                    <hr className="featurette-divider divider-width" />

                    <h2 className="col-12">Solicita una cotizacion.</h2>
                    <p className="col-6">Ing. Juan Ojeda Robles<br/> #14761 Col. Guadalupe<br/> Victoria C.P. 22426, Tijuana,<br/> Baja California.</p>
                    <p className="col-6">Tel: 664 682-77-82 <br/> Tel: 664 682-73-27</p>
                       
                    <a className="btn btn-primary btn-lg btn-block" href={"mailto:limpieza_california@hotmail.com?subject=Correo de Pagina Web&body=" + handle_form() } >Contactanos</a>

                </div>

                

            </div>

            
            
            

                

                

                
            <Footer />
    </div>
);

export default Index;