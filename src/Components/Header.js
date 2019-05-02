import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return(            
                <header className="bg-primary text-white">
                    <div className="container text-center align-bottom"> 
                        <h1 className="display-1">Mavimar Transportes</h1>
                        <p className="display-4">Transportando Confiança.</p>    
                    </div>  
                </header>
        )
    }
}