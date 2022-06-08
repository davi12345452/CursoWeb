/**
 * CONTINUAÇÃO HERANÇA: outras maneiras de atribuir um prototype a
 * um objeto
 */

const pai = {
    name: "Rogerio",
    cor_cabelo: "Preto"
}

const filha1 = Object.create(pai) //filha1 é um objeto vazio com o prototype pai.
console.log(filha1, filha1.__proto__)

const filha2 = Object.create(pai,{
    name: {value: "Joana", writable: true, enumerable: true},
    cor_cabelo: {value: "Marrom", writable: true, enumerable: false}
}) //Nesse tipo de criação eu preciso fazer uma especificação completa

console.log(filha2, filha2.__proto__)
 
// OBJETO.hasOwnProperty() -> Verifica se o objeto possui x propriedade, mesmo que privada

console.log(filha2.hasOwnProperty("cor_cabelo")) //Retorna true, mesmo cor_cabelo estando privada