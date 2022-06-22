import React from 'react'
import ReactDOM from 'react-dom'

import {BoaTarde, BoaNoite} from './componentes/Multiplos' //Não pode ser iniciado por minúscula, arquivos referenciados pelo usuário

ReactDOM.render(
    <div>
        <BoaTarde nome='Davi'/>
        <BoaNoite nome='Davi'/>
    </div>
    , document.getElementById('root'))

/* O código acima, não existe no JavaScript pura, é um jsx(javascript extendido), por isso, ao ser renderizado, esse arquivo não será um .js, mas sim, .ts, já que ele é um javascript tipado. O react possui mecanismo para converter esse código em js, podendo ser lido como um js no browser. */