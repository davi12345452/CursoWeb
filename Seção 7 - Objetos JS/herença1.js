/**
 * HERANÇA: visa criar mecanismos que possibilitem o re-uso de um 
 * código, para que não precise ficar repetindo-o. Todo objeto cri-
 * ado em JS possui como argumento um "link" para um objeto pai. Se
 * não for definido esse objeto pai ficará vazio. Quando não encontra
 * um atributo no objeto, ele procura no pai ou o chamado, prototype
 * esse atributo, caso também não exista nesse, aí então ele devolve
 * o erro.
 * 
 * OBS.: se estiver criando um objeto com função construtura, não have-
 * rá prototype.
*/

const Pai = {
    pai: 'Avô',
    mae: 'Avó',
    name: "Oi"
}

// Chamando o prototype:

console.log(Pai.__proto__) //Pai tem um prototype vazio, não aponta para outro objeto
console.log(Pai.prototype) //prototype só pode ser chamado por função, não por objeto
console.log(Pai.__proto__ === Object.prototype) // Testando se é mesmo um prototype, mesmo que vazio.
console.log(Pai.__proto__ === Pai.prototype) // Object é uma função, por isso chama prototype

// Apontando para o objeto pai

const Filho = {
    __proto__: Pai, //__proto__ -> usado por objeto , .prototype -> usado por função. 
    name: "Filho",
    idade: 10,
}

console.log(Filho.__proto__)
console.log(Filho.__proto__ === Object.prototype) // Object prototype está vazio
console.log(Filho.mae) //Está chamando um atributo do pai, definido como prototype

// O Object.prototype é meio que o primeiro objeto de tudo

Object.prototype.name_obj = "Objeto"
console.log(Pai.name_obj) //Pai aponta para object.prototype quando indefinido de __proto__
console.log(Filho.name_obj) //Aponta para Pai que aponta para Object.prototype

/*
 * Detalhe importante: quando o objeto ao qual um outro objeto está apontando possui o
 * mesmo atributo, por exemplo, name:, então o programa pega o name do objeto ao qual chamamos
 * Dizemos que o atributo abaixo sombreia o mesmo atributo acima. Por exemplo, o nome do filho
 * definido por name, sombreia o do pai, definido também por name -> Shadowing é o conceito disso
 */

console.log(Filho.name) //Filho ja tem seu name definido, logo devolve esse mesmo, não aponta para o do pai
console.log(Pai.name)