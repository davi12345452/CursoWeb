/*
 * MÉTODO MAP: é um método que aplica uma tranformação padrão para todos elementos
 * do array. Por exemplo, usar map em um array numérico para somar 1 em todos ele-
 * mentos. O map recebe de argumento uma callback que irá ser usada nos dados, re-
 * tornando um novo array, tranformado. Vale destacar, que como é uma função a call
 * back, podemos ter if dentro dela, implicando na tranformação de apenas alguns 
 * elementos. Assim como a forEach, a função callback do map pode receber 3 argu-
 * mentos, dado, indice e array, em ordem.
 */

const nums = [1, 2, 3, 5, 6, 7, 8]
let nums_map = nums.map(num => num + 1)
console.log(nums_map)

const nova_function = num => {
    if(num > 3){
        return num + 2
    }else{
        return num + 10
    }
}

nums_map = nums.map(nova_function)
console.log(nums_map)

// Tranformando os elementos do array em binário:

const nums_binario = nums.map(num => num.toString(2))
console.log(nums_binario)

const nums_binario2 = nums_map.map(num => num.toString(2))
console.log(nums_binario2)

// O map não altera o array original, somente cria um novo a partir deste e de uma função callback

//Podemos aplica maps sucessivos:

const map_sucessivo = nums.map(num => num.toString(2)).map(nova_function).map(num => num.toString(3)) //Ele vai executando sucessivamente
console.log(map_sucessivo)

// Desafio: recebe arquivos json e retorna o preço em string, R$ e com vírgula

const json = [
    '{"nome":"Caderno", "preco": 20.50}',
    '{"nome":"Estojo", "preco": 30}',
    '{"nome":"Lapis", "preco":1.40}',
    '{"nome":"Cola", "preco":5.55}'
]

// Criar função callback que pega um json e devolve o preço somente

const json_func = texto =>{
    let obj = JSON.parse(texto)
    return `R$${obj.preco.toFixed(2).replace(".", ",")}`
}

const json_to_array = json.map(json_func)
console.log(json_to_array)

// Criando o método map:

Array.prototype.map2 = function(callback){
    const newArray = []
    for(i in this){
       newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const novo = nums.map2(nova_function)
console.log(novo)