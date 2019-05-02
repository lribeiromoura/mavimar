import React from 'react';
import './index.css';
import Nav from './Components/Nav';
import Institucional from './Components/Institucional';
import Empresa from './Components/Empresa';

function App() {
  return (
    <div className="App"> 

    <body id="page-top">    
    <Nav></Nav>
    <Empresa></Empresa>
    <Institucional></Institucional>




<footer className="py-5 bg-dark">
  <div className="container">
    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
  </div>
 
</footer>




</body>
    </div>
  );
}

export default App;
