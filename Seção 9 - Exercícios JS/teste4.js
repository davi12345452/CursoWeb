/**
 * Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
 * exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
 */

 const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const converte_mes = mes => meses[mes-1]

 console.log(converte_mes(1))
 console.log(converte_mes(3))
 console.log(converte_mes(5))
 console.log(converte_mes(7))
 console.log(converte_mes(10))