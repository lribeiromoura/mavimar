import React, {Component} from 'react';
import $ from 'jquery';
import Nav from './Nav';


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
                    <h2>Services Prestados</h2>
                        <p className="lead">Somos referência nas áreas de: Armazenagem, Desova, Estufagem e Transportes.</p>
                    
                    <div class="card ">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" onClick={this.tabServicos}>
                            <li class="nav-item active">
                                <a class="nav-link" href="#container">Container</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#containervazio">Container Vazio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#cargasexcedentes">Cargas Excedentes</a>
                            </li>
                        </ul>
                    </div>
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
                    </div>
                </div>
            </section>
            </div>
        )
    }
}