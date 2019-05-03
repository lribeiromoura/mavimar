import React, {Component} from 'react';
import Footer from './Footer';
import Nav from './Nav';
import security from '../img/security.jpg';

export default class Segurança extends Component{
    render(){
        return(
            <div>
            <Nav></Nav>
            <section id="principios" className="bg-light">
  <div className="container">
    <div className="row">
        <div className="col-lg-8 mx-auto">
        <img className="mx-auto d-block img-fluid" src={security}></img>
        <br></br>
        <h2 className="colortext">Segurança</h2>
        
        <div class="card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Todos nossos veículos agregados passam por rigoroso processo de vistoria.</li>
                <li className="list-group-item">Todos nossos agregados são rigorosamente selecionados para atender nosso exigente padrão de qualidade.</li>
                <li className="list-group-item">Todos os nossos veículos contam com sistema de rastreamento via satélite.</li>
                <li className="list-group-item">Todos os nossos motoristas são treinados e contam com rádios comunicadores.</li>
                <li className="list-group-item">Áreas monitoradas 24hs para estacionar nossos veículos carregados.</li>
                <li className="list-group-item">Escolta armada e credenciada.</li>
                <li className="list-group-item">Seguro contra roubo e contra acidente.</li>
            </ul>    
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