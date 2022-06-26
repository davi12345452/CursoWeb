import React, {Component} from 'react'
import Main from '../template/main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: incluir, listar, alterar e excluir'
}

export default class userCroud extends Component {
    render() {
        return(
            <Main {...headerProps}>
                Main
            </Main>
        )
    }
}