/**
 * Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
 * o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
 * "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
 * inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
 * considerando se numero é igual a minimo ou a maximo.
 */

function estaEntre(num, min, max, incl = false){
    if(incl == false){
        if(num <= min || num >= max){
            return false
        }else{
            return true
        }
    }else{
        if(num < min || num > max){
            return false
        }else{
            return true
        }
    }
}


console.log(estaEntre(1, 10, 100))
console.log(estaEntre(30, 20, 40))
console.log(estaEntre(3, 3, 560))
console.log(estaEntre(3, 3, 500, true))