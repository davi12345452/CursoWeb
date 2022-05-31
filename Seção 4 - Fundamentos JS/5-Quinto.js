/**
 * TIPO BOOLEAN:
 * Existe o true or false, ou o !(false) ou !!(true) que podem ser colocados
 * basicamente na frente de qualquer dado e torná-los booleanos. Todos inteiros
 * depois de !! são verdadeiros, menos o 0, que é false.
 */

let variavel = true;
console.log(variavel); //devolve true
console.log(!variavel); //devolve false, negativo de true é false

variavel = 1;
console.log(variavel); //Devolve 1
console.log(!variavel); //Devolve false
console.log(!!variavel); //Devolve true

console.log(0); //Devolve 0
console.log(!0); //Devolve true
console.log(!!0); //Devolve false

//Alguns verdadeiros:
console.log(!!1) //True
console.log(!!"Davi") //True
console.log(!!" ") //True
console.log(!!{}) //True
console.log(!![]) //True

//Alguns falsos:
console.log(!!0) //False
console.log(!!"") //False
console.log(!!null) //False
console.log(!!NaN) //False
console.log(!!undefined) //False