// Main, principal do template

import './main.css'
import React from 'react'
import Header from './header'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <React.Fragment>
        <Header {...props}/> {/* Possibilita que header recebe as propriedades de main */}
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>

    // Por ser a main, já incluimos o seu cabeçalho com React.Fragment