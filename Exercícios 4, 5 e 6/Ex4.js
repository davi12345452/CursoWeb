/*
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 */

 const divisao = (Dividendo, divisor) => {
     let resto = Dividendo % divisor
     resultado = (Dividendo / divisor).toFixed(2)
     console.log(`Resultado: ${resultado} Resto: ${resto}`)
 }

divisao(10, 3)
divisao(12, 5)
divisao(20, 4)
