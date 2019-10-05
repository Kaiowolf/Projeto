import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Cursos from './pages/cursos'
import Contato from './pages/contato'
import Menu from './componentes/menu'

function App() {
  return (
    <div>
      <Menu></Menu>
      <Cursos></Cursos>
      <Contato></Contato>
    </div>
  );
}

export default App;
