import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './paginas/Login/login';
import Cadastro from './paginas/Cadastro/cadastro';
import Principal from './paginas/Principal/principal';
import Erro from './paginas/Erro/erro';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/cadastro" component={Cadastro} />
            <Route exact={true} path="/principal" component={Principal} />
            <Route exact={true} path="/erro" component={Erro} />
        </BrowserRouter>
    )
}

export default Rotas;