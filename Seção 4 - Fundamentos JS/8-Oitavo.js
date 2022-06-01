/**
 * BÁSICO SOBRE FUNÇÕES: é preciso lembrar de usar bloco,
 * já que as funções tem bloco associado. 
 */

// Função sem retorno: 

function MinhaFuncao (par1, par2){
    console.log(par1 + par2);
}

MinhaFuncao(1, 2); // -> 3
MinhaFuncao(1); // JS aceita isso, ele supoe que o segundo valor é undefined -> Gera um NaN 
MinhaFuncao(1, 2, 3, 4, 5, 6); // JS aceita isso, ele pega só os 2 primeiros números. -> 3
MinhaFuncao(); // -> NaN

// Função com retorno:

function calculo(a, b = 0){ // Posso definir um valor padrão para uma das variáveis na declaração de parâmetros
    return a + b;
}

// O b vem com o 0 como valor padrão, porém se dermos um valor, ele vai alterar

console.log(calculo(1, 2)); // -> 3, o b virou 2 ao invés de 0
console.log(calculo(1)); // -> 1 ao invés de NaN, b quando sem parametro vale 0
console.log(calculo(1, 2, 3, 4, 5)); // -> 3, b = 2 ao invés de 0
console.log(calculo()); // -> NaN

// Vale destacar que a função retorna para o pc, não na tela o valor, temos que dar print

// Armazenando uma função em uma variável: 

const n_func = function(a, b){  // ==> é igual a: function n_func (a,b)
    console.log(a + b);
}

n_func(10, 3) // -> 13
n_func() // -> NaN

// Armazenando uma função arrow em uma variável:

const func = (a, b) => { // É uma forma nova que reduz o tamanho de escrita
    console.log(a + b);
}

// Retorno implícito: 

const func2 = (a, b) => a + b;

/*
Essa última função significa o mesmo que o abaixo:
function func2(a, b){
    return a + b;
}
 */