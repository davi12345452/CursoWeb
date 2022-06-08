/*
 * Introdução à POO: é um paradigma da programação. No paradigma procedural,
 * as funções são as primeiras a serem executada. Na POO, já, o objeto é o
 * primeiro a ser executado, tendo dentro dele funções. O fundamental de POO
 * é saber mapear um objeto do mundo real, com os atributos necessário. Por
 * exemplo, em um sistema de mecânico é necessário saber as peças do carro,
 * agora no do DETRAN é importante placa, documentos, dono... Nunca vamos
 * conseguir extrair tudo e também nem é interessante tentar, cada sistema
 * tem seu foco e o objeto deve atender isso.
 */

// REVISÃO DE OBJETO:
// Criando objeto de diferentes formas:

const obj1 = new Object
const obj2 = {}

// Criando conteúdo no objeto:

obj1.nome = "Objeto 1"
obj2["nome do obj"] = "Objeto 2" // Nesse eu posso escolher melhor o tipo da chave
console.log(obj1, obj2)

// Deletando conteúdo de um objeto:

delete obj2["nome do obj"]
delete obj1.nome
console.log(obj1, obj2)

// Criando um objeto mais complexo:

const Carro = {
    marca: "Gol",
    "ano de criação": 2010,
    proprietário: {
        nome: "Mateus",
        idade: 40,
        nascimento: {
            dia: 19,
            mes: 06,
            ano: 1982,
        }
    }
}

console.log(Carro)
delete Carro.marca
console.log(Carro)
