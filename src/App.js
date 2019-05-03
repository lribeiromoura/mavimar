import React from 'react';
import './index.css';
import Nav from './Components/Nav';
import Institucional from './Institucional';
import Empresa from './Components/Empresa';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <body id="page-top">
        <Nav></Nav>
        <Empresa></Empresa>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
