/*
 * ESTRATÉGIAS DA CRIAÇÃO DE UM OBJETO:
 */

// Criando normal:

const obj1 = {}
const obj2 = new Object

// Criando através de função construtora

function Objeto(nome, idade){
    this.nome = nome
    this.idade = idade
}

const obj3 = new Objeto("Objeto 1", 14)
const obj4 = new Objeto("Objeto 2", 15)


console.log(obj3)

// Criando através de função factory

function criar_Objeto(nome, idade){
    return{
        nome: nome,
        idade: idade
    }
}

const obj5 = criar_Objeto("Objeto 1", 60)
const obj6 = criar_Objeto("Objeto 2", 30)

console.log(obj5)

// Através do object.create

const obj7 = Object.create(null)
const obj8 = Object.create(null)

obj7.nome = "Objeto 1"
obj7.idade = 60

console.log(obj7)

// Transformando JSON em objeto

const obj9 = JSON.parse('{"nome": "Objeto"}') //JSON é um arquivo texto com uma sintaxe específica que o comando converte.
console.log(obj9)