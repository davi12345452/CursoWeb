/*
 * CONTINUAÇÃO HERANÇA: criando através de função construtora e não a partir de objeto
 */

function MeuObjeto(){}
console.log(MeuObjeto.prototype) //Gera um prototype vazio

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__)
console.log(obj2.__proto__)
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.name = "Objeto Construído através de função"
console.log(obj1.name, obj2.name)