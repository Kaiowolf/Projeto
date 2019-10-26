import React, { Component } from 'react';
import Cabecalho from '../../componentes/menu/cabecalho'
import ContatoForm from './form'

export default class Contato extends Component {
    render() {
    return (
        <div className="container">
            <Cabecalho titulo="Contato"
                subtitulo="entre em Contato conosco" />
                <ContatoForm />
        </div>
            )
    }
}