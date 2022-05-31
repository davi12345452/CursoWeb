/*
TIPO STRING
Algumas funções:
- .charAt(x) -> devolve o char na posição x, lembrando que começa em 0
- .indexOf(x) -> devolve a posição do char x dentro de uma variável string
- .substring(x) -> devolve a string a partir de x ou (x, y) de x a y
- .concat(x) -> soma x à string
- .replace(x, c) -> substitui o o index x ou o caracter x por c
- .split(x) ->Cria um array, dividindo a string em x
*/

// .charAt(x):

let palavra = "Dav1";
console.log(palavra.charAt(4)); //Não gera erro, apenas não exibe nada e pula
console.log(palavra.charAt(3)); //Devolve caracter 1
console.log(palavra.charAt(2)); //Devolve caracter v

// .indexOf(x):

let palavra2 = "Fall3n";
console.log(palavra2.indexOf("3")); //Devolve 4 -> 0-F, 1-a, 2-l, 3-l, 4-3, 5-n
console.log(palavra2.indexOf("2")); //Devolve -1 significando que não há 
console.log(palavra2.indexOf("f")); //Devolve -1 significando que não há -> F != f

// .substring(x):

let palavra3 = "Davi";
console.log(palavra3.substring(1)); //Devolve a partir do index 1
console.log(palavra3.substring(1,3)); //Devolve o 1 e 2 index

// .split(x):
let palavra4 = "Davi,Raquel,Rodrigo";
console.log(palavra4.split(",")) //Divide na vírgula, criando um array com 3 strings

/*
Usando o template string:
*/