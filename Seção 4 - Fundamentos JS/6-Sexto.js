/**
 * TIPO ARRAY: array é uma vetor unidirecional, ou seja
 * um vetor com só uma dimensão, do tipo vetor[x], é uma
 * estrutura linear, você acessa conteúdo dele através do
 * index.
 * Primeiro elemento: 0
 */

let array = [7, 8, 8.4, true, "Davi"]; //Usamos , para separar os elementos -> Lista de Python
const array_2 = [2, 4, 6]; //-> Tupla de Python, ou seja, não pode ser mudado

// Para acessar algum valor dos arrays, basta colocar o nome dele e do lado um colchete
// com o index desejado:

console.log(array[4]); //Vai retornar index 4 do array, que é "Davi"

// Usando essa mesma estrutura variável[x] eu posso modificar os dados de um array, mas somente
// quando ele for definido com let.

console.log(array);
array[0] = "Maia";
console.log(array);

//Dessa maneira podemos também criar novos dados para o array, criar novas posições:

array[5] = "Janisch";
array[10] = "19/06/2001";
console.log(array); //Irá mostrar onde está vazio, já que do index 6 ao 10 está vazio

// FUNÇÃO LENGTH: permite saber a quantidade de elementos dentro do array

console.log(array.length); //Ele conta os espaços vazios
console.log(array_2.length);

// FUNÇÃO PUSH: permite a adição de elementos no array

array.push(10);

// DELETE: deleta o valor desejado por index do array

delete array[2];

// Em JavaScript, um array é considerado do tipo object

