/*
 * VISÃO GERAL SOBRE ARRAY: não existe um tipo nativo array em js, o array é basicamente um objeto
 * que organiza seus dados através do índice, é uma estrutura indexada; O dado é o valor e o índice
 * é a chave. Vale destacar que Array -> função que cria um array e new Array -> objeto que simboli
 * za um array.
 * 
 * JS permite uma flexibilidade na criação de um array, porém a boa prática de programador sugere que
 * se crie arrays com somente um tipo de dado, evitando erros, códigos de teste no futuro.
 * 
 * JavaScript, quando pedido um index sem dado, ao invés de dar erro, ele devolve apenas undefined
 *
 */

const array = []
console.log(typeof(array)) //Provando que a estrutura, não a função que cria um array, é um objeto

// Adicionar elementos

array[0] = "OI"
array[2] = "Fle" //pula um índice, deixando o índice 1 vazio, mas ocupado
array.push('Como vai') //Método push, adiciona no index final.

console.log(array)

// Método Length: conta o número de elementos no array

console.log(array.length)

// Método delete: deleta os dados de um index, deixando o espaço vazio, mas marcado

delete array[0]
console.log(array)

// Método Splice: adiciona, remove ou os dois ao mesmo tempo, elementos de um array
// Splice(a, b, c(opcional)) -> a: indicie a partir, b:excluir quantos itens a partir de a, c: se for excluir fica vazio, se não adiciona

array.splice(0, 2, "Trot")
console.log(array)