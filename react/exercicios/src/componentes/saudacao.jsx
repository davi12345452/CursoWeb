import React, {Component} from "react"

export default class Saudacao extends Component {

    // eslint-disable-next-line no-unreachable
    state = {
        sobrenome: this.props.sobrenome,
        nome: this.props.nome
    }

//    setTipo(e) {
//        console.log(e.target.value) //Faz aparecer no console o valor digitado
//    }

    constructor(props) {
        super(props)
        this.setSobrenome = this.setSobrenome.bind(this) //permite chamar o onChange sem função arrow
        this.setNome = this.setNome.bind(this)
    }

    setSobrenome(e) {
        this.setState({ sobrenome: e.target.value}) //Permite alterção do conteúdo no input
    }

    // SetState({Local que vai ser alternado: parâmetro.oQueVaiSerAlterado})
    //Ali abaixo, setState recebeu x, no input, alterando o value, que era parte de objeto

    setNome(e) {
        this.setState({ nome: e.target.value})
    }

    render() {
        const { sobrenome, nome } = this.state //this.props usaria os argumentos do arquivo js
        return (
            <div>
                <h1>{nome} {sobrenome}</h1>
                <hr />
                <input type="text" placeholder="Nome..." 
                value={nome} onChange={this.setNome}/> 
                <input type="text" placeholder="Sobrenome..."
                value={sobrenome} onChange={this.setSobrenome} />
            </div>
        )
    }
}

// Onchange: aparece no console o que foi digitado