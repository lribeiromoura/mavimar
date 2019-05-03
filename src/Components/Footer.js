import React, {Component} from 'react';
import '../index.css';
import mlogo from '../img/mlogo.png'
import Nav from './Nav';

export default class Footer extends Component{
    render(){
        return(      
          
          <footer class="page-footer">    
            <div class="container">
              <div class="row">
                <div class="col-md-12 py-5">
                  <div class="mb-1 flex-center text-center">
                    <img className="mx-auto d-block" src={mlogo}></img>
                    <div class="footer-copyright text-center py-3">© 2019 Copyright             
                    </div>                    
                  </div>
                </div>
              </div>
            </div>

            
          </footer>
  
            
        )
    }
}

