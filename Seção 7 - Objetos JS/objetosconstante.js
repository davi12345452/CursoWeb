/**
 * OBJETOS CONSTANTE: o tópico serve para entender porque podemos mexer 
 * em objetos definidos por const.
 * 
 * A explicação está no fato de que o objeto é uma constante e ele no
 * macro não pode ser alterado, porém podemos mudar seu valor por dentro.
 * Estruturas mais complexas como array e object podem ter seus valores
 * internos alterados por conta de comando próprios, porém nunca declara
 * dos novamente. Como variáveis simples não tem isso, quando definimos
 * como constantes, elas são mesmo constantes.
 * 
 */

const Objeto1 = {"nome": "Objeto1"}

// Se quisermos colocar mais conteúdo podemos normalmente

Objeto1.idade = 10

// O que não podemos é declarar novamente

// Objeto1 = {nome: "Novo Objeto", idade = 100} --> ERRO, a constante ja foi definida

// Congelar objeto(freeze): congela os dados de um objeto, não podendo alterá-lo

Object.freeze(Objeto1) //Basicamente cria um objeto constante.

Objeto1.nome = "Novo Objeto" //Objeto está congelado, logo, não pode ser alterado
console.log(Objeto1)

