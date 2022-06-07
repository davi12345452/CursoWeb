/**
 * Tipos de declaração de funções:
 */

//Tradicional:

function soma(a, b){
    return a + b
}

//Atribuindo uma função anônima a uma variável:

const soma2 = function(a, b){
    return a + b
}

//Função Arrow:

const soma3 = (a, b) => a + b

//Há ainda uma maneira de declarar uma função não nomeada
//em uma variável:

const soma4 = function soma4(a, b){ //Só uma questão de conceito mesmo
    return a + b
}