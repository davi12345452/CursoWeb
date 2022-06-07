/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

function bhaskara(ax2, bx, c){
    let parte1 = (bx ** 2) - (4 * c * ax2)
    if(parte1 < 0){
        return "Delta é negativo"
    }
    let parte2_negativa = (-bx - Math.sqrt(parte1))/2 * ax2
    let parte2_positiva = (-bx + Math.sqrt(parte1))/2 * ax2
    return [parte2_positiva, parte2_negativa]
}

console.log(bhaskara(3, 5, 12))
console.log(bhaskara(1, -10, 25))
console.log(bhaskara(1, -5, 6))