import React, {Component} from 'react';
import '../index.css';
import Truck from '../../src/img/truck.jpg';
import Estrada from '../../src/img/estrada.jpg';
import Containers from '../../src/img/containers.jpg';

export default class Empresa extends Component{
    render(){
        return(
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={Truck} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">                                                  
                            <h2 >Nossa Missão</h2>
                            <p className="lead ">
                                Resolver com qualidade todos e quaisquer problemas em Transporte, desenvolvendo soluções definitivas para a tranquilidade dos nossos clientes.
                            </p>
                        </div>                        
                    </div>

                    <div class="carousel-item">
                        <img class="d-block w-100" src={Estrada} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">                            
                            <h2 className="">Nossos Valores</h2>
                            <p className="lead">
                                Comprometimento, confiabilidade, estabilidade, ética, organização, lealdade e respeito ao cliente.
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={Containers} alt="Third slide" />
                    <div class="carousel-caption d-none d-md-block">                            
                        <h2>Nossa Visão</h2>
                        <p className="lead">
                            Ser líder no segmento de transporte, gerando confiança através do aprimoramento constante da capacitação técnica, humana e administrativa, acompanhando de forma continua os avanços mercadológicos.
                        </p>
                    </div> 
                    </div>
                </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        )
    }
}