/**
 * GETTERS AND SETTERS: é uma maneira de controlar dados privados.
 * 
 * Convenção: o uso de _ antes da chave significa que você planeja
 * tornar aquele conjunto chave valor privado dentro do objeto
 */


const sequencia = {
    _valor: 1, //convenção
    get valor() {return this._valor++},
    set valor(valor){return this._valor = valor}
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor)
