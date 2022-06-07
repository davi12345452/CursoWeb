/*
 * CLASSE X FACTORY: podemos falar que a diferença é o escopo.
 * Ao invés de ficarmos chamando this, quando declaramos uma
 * classe através de factory, por ter um escopo mais abrangente,
 * não precisamos se preocupar com isso.
 */

// Usando classe: 

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const Davi = new Pessoa("Davi")
const Rodrigo = new Pessoa("Rodrigo")

Davi.falar()
Rodrigo.falar()

// Podemos criar classes através de funções, usando o conceito
// de função factory;

const pessoa = nome => {
    return{
        falar: () => console.log(`Olá, meu nome é ${nome}`)
    }
}

const davi = pessoa("Davi")
const rodrigo = pessoa("Rodrigo")

davi.falar()
rodrigo.falar()