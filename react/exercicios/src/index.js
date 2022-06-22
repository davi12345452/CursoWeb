import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/pai' //Não pode ser iniciado por minúscula, arquivos referenciados pelo usuário
import Filho from './componentes/filho'

ReactDOM.render(
    <div>
        <Pai nome="Davi" sobrenome="Maia">
            <Filho nome="Davi1" />
            <Filho nome="Davi2" />
            <Filho nome="Davi3" />
        </Pai>
    </div>
    , document.getElementById('root'))

/* O código acima, não existe no JavaScript pura, é um jsx(javascript extendido), por isso, ao ser renderizado, esse arquivo não será um .js, mas sim, .ts, já que ele é um javascript tipado. O react possui mecanismo para converter esse código em js, podendo ser lido como um js no browser. */