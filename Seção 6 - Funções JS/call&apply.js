/**
 * CALL & APPLY: são outras 2 maneiras de se chamar uma função
 * dentro de javascript
 */

// Call: usa-se para se passar um objeto como argumento de uma função


function soma(a, b){
    return this.a + this.b
}

const obj = {a: 2, b: 3}

console.log(soma.call(obj))
console.log(soma.apply(obj))

// Ele aplica uma função usando um objeto como parâmetro. Cuidar função arrow
// da erro por causa do this.
