import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory} from 'react-router';
import Servicos from './Components/Servicos';
import Contato from './Components/Contato';
import Institucional from '../src/Components/Institucional';
import Principios from './Components/Principios';
import Segurança from './Components/Seguranca';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/institucional' component={Institucional}></Route>
        <Route path='/principios' component={Principios}></Route>
        <Route path='/seguranca' component={Segurança}></Route>
        <Route path='/services' component={Servicos}></Route>
        <Route path='/contact' component={Contato}></Route>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
