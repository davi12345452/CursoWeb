/**
 * FUNÇÕES CALLBACK: são funções que chamam funções anteriores.
 * Uma função callback é uma função passada a outra função como argumento,
 * que é então invocado dentro da função externa para completar algum tipo
 * de rotina ou ação.
 */

// 1)ForEach: é uma função que executa dentro dos arrays, primeiro
// pega o dado e depois o índice, automaticamente, independentemente
// de chamada.

const carros = ["Gol", "Hilux", "Golf", "BMW"]

function ordena_carro(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

carros.forEach(ordena_carro) //Como é automático, nem precisa selecionar os parâmetros

// Usando callback para selecionar dados específicos e criar um novo array

const notas  = [1.5, 7.8, 4.5, 9.8, 10, 3, 5.6]
let notas_nova = []

function maior_que_sete(nota){ //Pega uma nota e coloca ela em outro array se for maior ou igual a 7
    if(nota >= 7)
        notas_nova.push(nota)
}
notas.forEach(maior_que_sete)
console.log(notas_nova)
console.log(notas)

// 2)Filter: função que chama outra função para filtrar elementos
// de um array com base na função que chamou. Usa funçao anonima.

/*const maior_que_sete2 = notas.filter(function(nota){
    return nota >= 7
}) */

const maior_que_sete2 = notas.filter(nota => nota >= 7) //Usando função arrow
console.log(maior_que_sete2)

/**
 * 3)Usando callback no browser: só deixarei o código usado em forma de comentário aqui
 * 
 * document.getElementsByTagName('body')[0].onclick = e => console.log("O eventou ocorreu!").
 * 
 * O callback aqui é que toda vez que clicarmos no body do browser ele irá retornar a função,
 * ou seja, há um chamamento da função toda vez que clicamos no body da página
 */


