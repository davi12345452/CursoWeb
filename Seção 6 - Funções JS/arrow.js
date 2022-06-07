/**
 * FUNÇÃO ARROW: modo de declarar função visando uma melhor utilização do this e menor sintaxe.
 */

// Escrevendo normal:

let funcao = function(a){return a * 2}
console.log(funcao(2))

// Escrevendo como arrow:

funcao = a => a * 2 //Entre o = e => é os parâmetros, depois do => é o bloco.
console.log(funcao(2))

