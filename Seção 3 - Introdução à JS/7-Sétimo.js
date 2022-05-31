/*
Desafio troca de valores: vou atribuir valor à duas variáveis e ao longo
do programa irei trocar seus valores.
*/

let a = 10; //Variável a = 10
let b = 8.50; //Variável b = 8.50

console.log("a: "+ a); //Imprimindo valor inicial de a
console.log("b: "+ b); //Imprimindo valor inicial de b

let temp_a = a; //Criando variável temporária com valor de a, 10
a = b //Atribuindo o valor de b em a
b = temp_a //Atribuindo o valor de a em b

console.log("a: "+ a); //Imprimindo valor final de a
console.log("b: "+ b); //Imprimindo valor final de b