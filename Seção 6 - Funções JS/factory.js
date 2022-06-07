/**
 * FUNÇÃO FACTORY: basicamente, uma função factory é uma função que retorna
 * um objeto. 
 */

const criarPessoa = function(n, i){ //Função factory, cria objeto tipo pessoa com nome e idade.
    return{
        nome: n,
        idade: i
    }
}

const Davi = criarPessoa("Davi", 20)
const Rodrigo = criarPessoa("Rodrigo", 51)

console.log(Davi, Rodrigo)

//Teste: criar função factory que recebe um produto e seu preço e tranforma em objeto

const criarProduto = function(nome_produto, valor_produto){
    return{
        nome: nome_produto,
        valor: valor_produto
    }
}

const Ipad = criarProduto("iPad", 4000)
const Notebook = criarProduto("Notebook", 3000)

console.log(Ipad)
console.log(Notebook)