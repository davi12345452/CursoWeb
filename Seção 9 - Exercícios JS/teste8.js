/**
 * Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o * elemento que repetirá, enquanto
 * que o segundo será o número de vezes que haverá repetição. Um array    
 * será  retornado.
 */

const repete = (termo, repetir) => {
    arr = []
    for(let i = 0; i < repetir; i++){
        arr[i] = termo
    }
    return arr
}

console.log(repete('repete', 3))
console.log(repete(5, 7))
console.log(repete('repete', 5))