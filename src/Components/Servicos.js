import React, {Component} from 'react';
import $ from 'jquery';
import Nav from './Nav';
import Footer from './Footer';


export default class Servicos extends Component{
    tabServicos(){
        $( '#nav nav-tabs card-header-tabs' ).on( 'click', function () {
            $( 'nav nav-tabs card-header-tabs' ).find( 'li.active' ).removeClass( 'active' );
            $( this ).parent( 'li' ).addClass( 'active' );
        });
    }
    render(){
        return(
            <div>
            <Nav></Nav>
            <section id="services" className="bg-light card">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 mx-auto">
                    <h2 className="colortext">Services Prestados</h2>
                        <p className="lead colortext">Somos referência nas áreas de: Armazenagem, Desova, Estufagem e Transportes.</p>
                        <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link colortext" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Container
                            </button>
                        </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Importação e Exportação.</li>
                                    <li className="list-group-item">Door to Door.</li>
                                    <li className="list-group-item">Nacional e Internacional.</li>
                                    <li className="list-group-item">Transporte de DTAS.Remoção e PCI.</li>
                                    <li className="list-group-item">Armazenamentos e Devoluções. </li>
                                    <li className="list-group-item">Transporte de DTA. </li>
                                    <li className="list-group-item">Transporte de Carga Refrigerada.</li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed colortext" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Container Vazio
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Remoção entre Terminais.</li>
                                <li className="list-group-item">Embarque e Descarga.</li>
                                <li className="list-group-item">628 agregados com veículos vistoriados e aprovados para Transporte de Container Vazio.</li>
                                <li className="list-group-item">Transporte Inter-estadual</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed colortext" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Cargas Excedentes
                            </button>
                        </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Transporte de cargas com peso.</li>
                            <li className="list-group-item">Transporte de máquinas e tubos.</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
            </div>
        )
    }
}