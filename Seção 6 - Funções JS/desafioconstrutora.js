/**
 * DESAFIO: contruir o código de classe vs factory como uma 
 * função construtora
 */


const pessoa = function(nome){
    this.falar = function(){
        console.log(`Olá, meu nome é ${nome}`)
    }
}

const Davi = new pessoa("Davi")
const Rodrigo = new pessoa("Rodrigo")

Davi.falar()
Rodrigo.falar()