const modA = require('../../moduloA') //Windows e Macintosh aceitam o a min. , já linux não
const modB = require('../../moduloB')

/*
 ../ -> sai da pasta
 . -> sai do arquivo, mas fica na mesma pasta
 ../../ -> sai de duas pastas
*/

console.log(modA)
console.log(modB)

/* É interessante perceber o resultado dessa chamada. Mesmo módulo A sendo
 * escrito sem objeto algum, ele vem em forma de objeto. Isso se deve ao
 * fato de os pacotes exportados pelo node serem feitos por JSON, logo, tudo
 * é encapsulado em JSON, e depois tranformado de JSON para objeto. 
 */