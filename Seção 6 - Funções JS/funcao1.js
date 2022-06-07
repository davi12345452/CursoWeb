/**
 * Parâmetros e retornos são opcionais: podemos ter de 0 a inúmeros
 * parâmetros, assim como retornos. Lembrando que console.log não é
 * considerado retorno. Somente o return é retorno.
 */

function volume(a, b, c){
    let v = a * b * c
    if(v >= 20) 
        return v //Maior ou igual a 20 retorna
    else
        console.log("Menor que 20") //Menor de 20 não retorna
}

volume(1, 20, 0.3)
volume(1, 20, 3)
volume(1, 10, 0.7)

/**
 * Função com número de parâmetros desconhecidos. Através dessa função
 * podemos escrever quantos parâmetros quisermos, que serão utilizados
 * e não ignorados. Usando for in arguments(são os parâmetros)
 */

function soma(){
    let soma = 0
    for(i in arguments){ //arguments é um array que contém todos parâmetros de soma()
        soma += arguments[i]
    }
    return soma 
}

console.log(soma(1))
console.log(soma(1,2))
console.log(soma(1,2,3))
console.log(soma(1,2,3,4))
console.log(soma(1,2,3,4,5))

// Com outros tipos essa função concatena e não da erro.

console.log(1, "Davi")