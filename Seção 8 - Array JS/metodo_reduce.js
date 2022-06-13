/*
 * MÉTODO REDUCE: ele pega um por um e realiza operações: [1,2,3,5] -> 1 + 2 = 3 + 3 = 6 + 5...
 * Utiliza-se um callback sobre um acumulador que vai aumentando a medida que o array é lido
 * da esquerda para a direita 
 */

const alunos = [
    {nome: "João" , nota: 7.95 , bolsista: false},
    {nome: "Maria" , nota: 2.10 , bolsista: false},
    {nome: "Mateus" , nota: 3.30 , bolsista: true},
    {nome: "Fabiana" , nota: 10.00 , bolsista: true},
    {nome: "Marcelo" , nota: 2.40 , bolsista: false}
]

// Map vai resultar apenas nas notas, reduce vai acumular as notas:

const func_callback = (acumulador, atual) =>{
    return acumulador + atual //Tem que se atentar, pois, o reduce devolve o último termo e a soma dos anteriores.
}
notas_acumuladas = alunos.map(a => a.nota).reduce(func_callback)
console.log(notas_acumuladas)

// Desafio, todos alunos são bolsista?

const bolsitas = (acumulador, atual) => {
    return acumulador && atual
}

const todos_s_bolsitas = alunos.map(a => a.bolsista).reduce(bolsitas)
console.log(todos_s_bolsitas)

// Desafio 2, algum é bolsista

const bolsistas_2 = (acumulador, atual) => acumulador || atual
console.log(alunos.map(a => a.bolsista).reduce(bolsistas_2))

// Criando o reduce

Array.prototype.new_reduce = function(callback){
    let acumulador = this[0]
    for(i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i])
    }
    return acumulador
}

console.log(alunos.map(a => a.nota).new_reduce(func_callback))