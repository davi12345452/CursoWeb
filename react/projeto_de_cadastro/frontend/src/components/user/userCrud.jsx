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

    componentWillMount(){
        axios(baseURL).then(resp=>{
            this.setState({ list:resp.data})
        })
    }

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
        if(user) list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className='form-control' name='name'
                             value={this.state.user.name}
                             onChange={e =>this.updateField(e)}
                             placeholder='Digite o nome...' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className='form-control' name='email'
                             value={this.state.user.email}
                             onChange={e =>this.updateField(e)}
                             placeholder='Digite o email...' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>
                            Salvar</button>
                        <button className="btn btn-secondary ml-2" onClick={e=>this.clear(e)}>
                            Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({user})
    }

    remove(user){
        axios.delete(`${baseURL}/${user.id}`).then(resp=>{
            const list = this.getUpdateList(null)
            this.setState({list})
        })
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user =>{
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                        onClick={()=> this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>    
                        <button className="btn btn-danger ml-2"
                        onClick={()=> this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return(
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}