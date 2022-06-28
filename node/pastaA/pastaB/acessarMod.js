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

// Se dentro da pasta houver um arquivo index, não é preciso referenciar o arquivo, basta chamar a pasta.

const modPastaC = require('../pastaC')
console.log(modPastaC.saudacao)

/* Criando uma rquisição Web com comandos internos do node. Está comenta-
do, pois fica rodando a porta infinitamente.*/

//const http = require('http') //Requerendo os comandos http do node
//http.createServer((req, res) => { //criando server
//    res.write('Bom dia') //Escrever na web "Bom dia"
//    res.end() //Encerrar
//}).listen(8080) //Criando requisição em localhost:8080

