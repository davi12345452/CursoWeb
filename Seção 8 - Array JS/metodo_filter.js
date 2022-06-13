/* 
 * MÉTODO FILTER: é um método que cria um array, usando um array base e um critério.
 * Ele filtra dentro de um array, com base em um critério, devolvendo um novo array
 * com os elementos que cumpriram esses critérios.
 */

const produtos = [
    {nome: "Iphone" , preço: 5000.00 , fragil: false},
    {nome: "Copo de Vidro" , preço: 20.00 , fragil: true},
    {nome: "Televisão" , preço: 2300.00 , fragil: false},
    {nome: "Lente de Contato" , preço: 230.00 , fragil: true},
    {nome: "Ipad" , preço: 4000.00 , fragil: false}
]

// O callback deve retornar true or false, para poder incluir. É como se o critério
// foi ou não atendido. 

produtos_frageis = produtos.filter(p => p.fragil == true && p.preço <= 220) //Filtra somente os true para frágil e preço menor/igual que 220

console.log(produtos_frageis)

// Criando o próprio filter:

Array.prototype.new_filter = function(callback){
    const new_Array = []
    for(let i = 0; this.length > i; i++){
        if(callback(this[i], i, this) == true){
            new_Array.push(this[i])
        }
    }
    return new_Array
}

produto_nfrageis = produtos.new_filter(p => p.fragil == false)
console.log(produto_nfrageis)

