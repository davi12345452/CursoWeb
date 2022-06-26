// Main, principal do template

import './main.css'
import React from 'react'
import Header from './header'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <React.Fragment>
        <Header {...props}/> {/* Possibilita que header recebe as propriedades de main */}
        <main className="content container-fluid">
            <div className='p-3 mt-3'>
                {props.children}
            </div>
        </main>
    </React.Fragment>

    // Por ser a main, já incluimos o seu cabeçalho com React.Fragment