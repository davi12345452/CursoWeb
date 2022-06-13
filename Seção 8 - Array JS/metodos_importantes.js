/*
 * MÉTODOS IMPORTANTES DE ARRAY: métodos são funções, em array essas funções especiais de array são fundamentais
 * para poder mexer com essas estrturas. Existem métodos simples e os mais complexos 
 */

const marcas_carros = ["Mercedes", "Ferrari", "BMW", "Chevrolet", "Toyota"] //Estrutura const define que a estrutura marcas_carros é um array, mas não delimita seu tamanho e conteúdo

// pop(): remove o último elemento

marcas_carros.pop()
console.log(marcas_carros)

//shift(): remove o primeito elemento

marcas_carros.shift()
console.log(marcas_carros)

// push() e unshift: o primeiro add por último e o último por primeiro

marcas_carros.push("Mercedes")
marcas_carros.unshift("Toyota")
console.log(marcas_carros)

// splice(y, x): substitui x elementos a partir de um index y

marcas_carros.splice(1, 1) //Removendo o elemento index 1 com splice
marcas_carros.splice(1, 0, "Ferrari") //Adicionando um elemento sem remover outro com splice
marcas_carros.splice(1, 2, "Ferrari e BMW") //Substituindo os 2 elementos a partir de index 1 por um
console.log(marcas_carros)

//slice(x): a partir do index x ele cria um novo array

const novo_marcas_carro = marcas_carros.slice(2)
console.log(marcas_carros)
console.log(novo_marcas_carro)

const novo_marcas_carro2 = marcas_carros.slice(1, 3) //Pega os elementos 1 e 2 e coloca em um array
console.log(novo_marcas_carro2)