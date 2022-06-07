/**
 * CIDADÃO PRIMEIRA CLASSE: também chamado de Higher-order function ou first class
 * object, é a estrutura mais importante de JavaScript. Podemos usar a função como
 * um dado, ou seja, podemos declara-la como dado, assim como um parâmetro dentro
 * de outra função ou estrutura.
 */

// Criando de forma literal:

function funcao1(param1, param2){ //Pode ou não ter parâmetro
    console.log(param1+param2) //Não precisa ter retorno
}

// Criando como variável:

const funcao2 = function(para1, para2){
    console.log(para1+para2)
}

// Criando como array:

const array = [function(a, b){return(a + b)}, funcao2, funcao1] //Posso criar dentro, ou atribuir antigas funções dentro

// Criando como Objeto:

const obj = {}
obj.funcao4 = function(){}

// Passando uma função como parâmetro:

function EntreZeroeCem (){ // Gera um número aleatório entre 0 e 100
    let numb = Math.random() * 100
    return Math.floor(numb)
}

function repeticao(param1){ // Função com repetição básica que usa a primeira função de parâmetro
    let cont = 0
    while(cont != param1){
        console.log(cont, param1)
        cont += 1
    }
}


repeticao(EntreZeroeCem())