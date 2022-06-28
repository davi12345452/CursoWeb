/* Exportando o módulo B e A para módulo client */

const modA = require('./moduloA')
const modB = require('./moduloB')

console.log(modA.ola)
console.log(modA.ola2)
console.log(modA.ola3)

console.log(modB.bomDia)
console.log(modB.boaNoite()) 


//Somente usando o module.exports, o this ou o export que podemos exportar
//funções, objetos, variáveis entre módulos, tudo que for definido fora
//disso, não será exportável, como é o caso dos console.log desse arquivo