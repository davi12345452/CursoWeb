/**
 * FUNÇÕES ANÔNIMAS: é um tema muito simples, porém de extrema importância.
 * Quando guardamos funções dentro de uma variável, nada mais que estamos
 * fazendo é criando funções anônimas e guardando-as dentro de uma variável
 */

const func = function(a, x){
    return x + a
}

const imprimeFunc = function(a, x, oper = func){
    console.log(oper(a, x))
}

// Função anônima é basicamente uma função sem nome, que pode ou não ser
// atribuída em uma variável. 