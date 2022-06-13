/*
 * SIMULANDO ARRAY COM OBJETO: não é muito importante. Irá usar propriedades para transformar
 * um objeto em array
 */

const quase_array = { 0: "Zero", 1: "Um", 2: "Dois"}
const array = ["Zero", "Um", "Dois"]

Object.defineProperty(quase_array, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(array, " = ", quase_array.toString())