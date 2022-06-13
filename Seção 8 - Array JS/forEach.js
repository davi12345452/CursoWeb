/*
 * MÉTODO FOREACH: usado para percorrer listas/arrays, usando o callback de uma função,
 * o forEach é um método em que ele passa por cada elemento de um array e executa uma
 * função sobre o dado, como se fosse um for in. Por isso as função dentro dele são
 * chamadas de callback, pois são executadas várias vezes. O forEach é formado por um
 * laço for
 * 
 * O forEach tem uma prioridade, primeiro ele chama o conteúdo, o dado em si, se houver
 * um segundo chamamento, ele chama o índice. Se o método tiver 1 argumento, ele simples-
 * mente ignora o índice. O forEach tem 3 parametros: dado, indice e o próprio array, nessa
 * ordem. Depois desses 3, o argumento fica indefinido
 */

const marcas_carros = ["Mercedes", "Ferrari", "BMW", "Chevrolet", "Toyota"]

marcas_carros.forEach(function(nome, indice){  //O forEach pega o dado e posteriormente o indice, sempre.
    console.log(`${indice + 1}) ${nome}`)
})

const nomes = nome => console.log(nome)
marcas_carros.forEach(nomes) //Detalhe, não usamos () depois do nome da função. marcas_carros.forEach(nomes()) -> ERRO

// Criando o método forEach: função que recebe uma função callback.

Array.prototype.forEach2 = function(funcao_callback){
    for(i in this){
        funcao_callback(this[i], i, this) //Devolve dado, indice e array
    }
}

marcas_carros.forEach2(nomes)
