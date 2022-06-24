// Cabeçalho do template

import React from 'react'
import './header.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <header className='header d-none d-sm-flex flex-column'>
        <h1 className='mt-3'>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className='lead text-muted'>{props.subtitle}</p>
    </header>


// d-none: header não aparece para dispositivos celulares
// mt-x: define a margem em x tamanho