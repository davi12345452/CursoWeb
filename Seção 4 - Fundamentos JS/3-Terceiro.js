/*
TIPO NUMBER
*/

let a = 10;
let b = Number('2.00'); //Outra maneira de declarar variáveis com dados tipo number
// DETALHE PARA AS ASPAS ÚNICAS
const v = 2.10;

console.log(Number.isInteger(a)) //Retorna True
console.log(Number.isInteger(b)) //Retorna True, ignora o ponto flutuante se for .0
console.log(Number.isInteger(v)) //Retorna False

/*
Tirando casas decimais e tranformando em outras bases:
Comando .toFixed(x) permite escolher até que casa vai
aparecer e o .toString(x) em qual base
*/

let c = 3;
let d = 10;
let media = d/c;

console.log(media); //Valor da media
console.log(media.toFixed(3)); //Media com até 3 casas decimais
console.log(media.toString(2)); //Media em binário

//Agora vamos transformar em hexadecimal o c e d

console.log(c.toString(16)); // O valor 3 fica igual
console.log(d.toString(16)); // 1, 2, 3, 4, 5, 6, 7, 8, 9, A, b, c, d, e, f -> ficar igual A

/*
Outras coisas interessantes:
- Não é possível aplicar toString ou toFixed sobre um 
valor, mas sobre uma variável
- 7/0 não da erro
- "Number"/6 da certo
- "String"/6 = NaN (Not a Number)
- Há alguns problemas com ponto flutuante, 0.1 + 0.7 = 0.799999999...
*/

let e = 7/0
console.log(e); // Retorna Infinito ao invés de erro
console.log(typeof e); //Infinito é considerado tipo Number

let f = "10"/2;
console.log(f); //Retorna o valor da divisão
console.log(typeof f);

console.log(0.1+0.7) //Problema do ponto flutuante
 