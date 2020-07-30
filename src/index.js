import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import CadastroVideo  from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

 // declaracao de variaveis
 const Pagina404 = () => (<div> Página 404</div>);

 /**
  * quando usado exact ele procura somente a rota exata
  */

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}  exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

