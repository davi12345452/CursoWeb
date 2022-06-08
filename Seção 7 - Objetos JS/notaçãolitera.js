/**
 * NOTAÇÃO LITERAL: é uma nova sintaxe que veio com a att de 2015
 */

const a = 10
const b = 30
const c = 35

const nome = "nome"
const valor = 10

// Antes:

const obj1 = {a: a, b: b, c: c}
console.log(obj1)

const obj3 = {}
obj3[nome] = valor
console.log(obj3)

const obj5 ={
    funcao: function(){
        ;
    }
}

// Agora:

const obj2 = {a, b, c}
console.log(obj2)

const obj4 = {[nome]: valor}
console.log(obj4)

const obj6 ={
    funcao(){
        ;
    }
}