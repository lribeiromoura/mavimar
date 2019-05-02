import React, {Component} from 'react';
import Mavlogo from '../../src/img/logo.png'

export default class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/"><img class="img-fluid float-left" src={Mavlogo}alt=""></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">



                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Empresa
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#institucional">Institucional</a>
                        <a class="dropdown-item" href="#principios">Princípios</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                       
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger color-text" href="services">Serviços</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link js-scroll-trigger color-text" href="contact">Contato</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}