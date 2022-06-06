/**
 * ESTRUTURA WHILE: estrutura de repetição que não tem um número
 * de repetições definidas, mas sim uma condição, que pode deixar
 * infinita a repetição, ou sla. É usado para quando não sabemos
 * quantas repetições serão necessárias. Pense no menu de um jogo
 * o usuário executa em mexe nele quantas vezes quiser, a condição
 * de quebra será do usuário.
 */

function EntreZeroeCem (){
    let numb = Math.random() * 100
    return Math.floor(numb)
}

// Função que cria número aleatório inteiro.

let contador = 0
const condicao = EntreZeroeCem()

while(contador != condicao){
    contador += 1
    console.log("Condição:", condicao, "Contador:", contador)
}

// Nesse programa, o computador sorteia um número, e o começa a contar
// de um em um, até achar este mesmo número. 