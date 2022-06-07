/*
 * Progrma que recebe 2 parâmetros e devolve soma, subtração, multiplicação e divisão 
 */

function operacao(a = 0, b = 0){
    return{
        soma: (a + b),
        subtração: (a - b),
        multiplicação: (a * b),
        divisão: (a / b)
    }
}

console.log(operacao(2, 5))
