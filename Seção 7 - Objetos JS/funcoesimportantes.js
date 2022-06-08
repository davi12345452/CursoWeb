/**
 * FUNÇÕES IMPORTANTES PARA SEREM USADAS EM OBJECTS: aqui vamos listar algumas
 * funções Object. importantes para uso.
 */

const objeto = {
    nome: "Objeto",
    valor: 10,
    boolen: true
}
// Cria array com as chaves: 

const chaves = Object.keys(objeto)
console.log(chaves)

// Cria array com os valores:

const valores = Object.values(objeto)
console.log(valores)

// Divindo em arrays com chave e valor -> {chave: valor, chave2: valor2} => [[chave, valor],[chave2, valor2]]

const conjunto_k_v = Object.entries(objeto)
console.log(conjunto_k_v)

// Aplicação: Pricipalmente em Python, análise de dados

for(i in conjunto_k_v){
    for(c in conjunto_k_v[i]){
        console.log(`${conjunto_k_v[i][c]}`)
    }
}

Object.entries(objeto).forEach(([cha, val]) =>{
    console.log(`${cha}: ${val}`)
})

// Definindo propriedades do objeto: é uma propriedade de definir uma key com um objeto e poder
// definir suas propriedades. Por exemplo, se ele pode ser sobrescrito, se aparece, seu conteúdo

Object.defineProperty(objeto, "DataNascimento",{
    enumerable: true, //Define que ele vai aparecer -> CONTEÚDO PÚBLICO OU PRIVADO.
    writable: false, //Congela o conteúdo dessa key
    value: "19/06/2001"
})

console.log(objeto)
objeto["DataNascimento"] = "19/06/2000"
console.log(objeto) // Não altera pq o writable foi definido já


// Object.assign: concatena objetos sobre um. Chaves definidas no primeiro
// que estejam no nos outros, irão ser sobreescritas caso não tenham uma
// propriedade writable false, ou o objeto esteja freeze.

const o1 = {a:1,b:2,c:3}
const o2 = {a:5}
const o3 = {b:6, d:7}
console.log(o1)

Object.assign(o1, o2, o3)
console.log(o1)







