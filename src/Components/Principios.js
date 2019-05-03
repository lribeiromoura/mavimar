import React, {Component} from 'react';
import Footer from './Footer';
import Nav from './Nav';
import principios from '../img/principios.jpg';

export default class Principios extends Component{
    render(){
        return(
            <div>
            <Nav></Nav>
            <section id="principios" className="bg-light">
  <div className="container">
    <div className="row">
    
        <div className="col-lg-8 mx-auto">
        <img className="mx-auto d-block img-fluid" src={principios}></img>
        <h2 className="colortext">Princípios</h2>
        <h4 className="colortext">Nossa Missão</h4>
        <p className="lead colortext">
            Resolver com qualidade todos e quaisquer problemas em Transporte, desenvolvendo soluções definitivas para a tranquilidade dos nossos clientes.
        </p>

        <h4 className="colortext">Nossa Visão</h4>
        <p className="lead colortext">
            Ser líder no segmento de transporte, gerando confiança através do aprimoramento constante da capacitação técnica, humana e administrativa, acompanhando de forma continua os avanços mercadológicos.
        </p>

        <h4 className="colortext">Nossos Valores</h4>
        <p className="lead colortext">
            Comprometimento, confiabilidade, estabilidade, ética, organização, lealdade e respeito ao cliente.
        </p>
      </div>
    </div>
  </div>
</section>
<Footer></Footer>
</div>
        )
    }
}