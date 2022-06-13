/*
 * VISÃO GERAL SOBRE ARRAY: não existe um tipo nativo array em js, o array é basicamente um objeto
 * que organiza seus dados através do índice, é uma estrutura indexada; O dado é o valor e o índice
 * é a chave. Vale destacar que Array -> função que cria um array e new Array -> objeto que simboli
 * za um array.
 * 
 * JS permite uma flexibilidade na criação de um array, porém a boa prática de programador sugere que
 * se crie arrays com somente um tipo de dado, evitando erros, códigos de teste no futuro.
 */

const array = []
console.log(typeof(array)) //Provando que a estrutura, não a função que cria um array, é um objeto