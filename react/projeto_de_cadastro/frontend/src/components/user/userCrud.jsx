import React, {Component} from 'react'
import Main from '../template/main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: incluir, listar, alterar e excluir'
}

// Integrando com o Backend:
 const baseURL = 'http://localhost:3001/users'

// Estado inicial do formulários:

const initialState = {
    user: {name:'', email:''},
    list: []
}

export default class userCrud extends Component {

    state = {...initialState} //Inicializando o initial state

    clear(){ //Limpa, quando o usuário clicar em cancelar
        this.setState({user: initialState.user}) //Não limpa a lista, somente o user.
    }

    save(){ //Serve para incluir, quanto para alterar um usuário
        const user = this.state.user
    
        const method = user.id ? 'put' : 'post'
        /* No método, se id existir, vai fazer um put(alterar), senão
        vai fazer um post, incluir. */

        const url = user.id ? `${baseURL}/${user.id}` : baseURL
        /* Se o usuário existir, o URL é o url normal /id, se não existir, é somente
        o normal, sem barra */

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data) //A lista terá os dados temporários, pra não ficar chamando backend toda hora

                this.setState({user: initialState.user, list})
                /* Limpamos o formulário e salvamos as novas informações em list */
            })
    }

    getUpdateList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render() {
        return(
            <Main {...headerProps}>
                Main
            </Main>
        )
    }
}