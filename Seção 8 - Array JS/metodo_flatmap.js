/*
 * MÉTODO FLATMAP: é um map relacionado com concat. Útil quando o array
 * não está linear para o map que precisamos, por isso concatenamos e 
 * passamos o map. Podemos fazer isso tudo usando o flatMap. Ele não 
 * existe na API normal do JS, por isso iremos criar um método
 */


Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback)) //Se aplica um map com callback em cima dos arrays concatenados
}

const soma = ([1, 2, 4], [10]).flatMap(a => a)
console.log(soma)
