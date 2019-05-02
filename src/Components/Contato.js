import React, {Component} from 'react';
import Nav from './Nav';

export default class Contato extends Component{
    render(){
        return(   
          <div>
           <Nav></Nav>         
            <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2>Onde estamos?</h2>
                  <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4337.0843168862775!2d-46.392546283867524!3d-23.923685253553465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03b00d7c9d9d%3A0x8d5052ed599a581d!2sMavimar+Transportes!5e0!3m2!1spt-BR!2sbr!4v1556808351047!5m2!1spt-BR!2sbr" width="600" height="350" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                  </div>
              </div>
            </div>
          </section>
          </div>
        )
    }
}