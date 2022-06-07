/**
 * PARÂMETRO PADRÃO: é definir um valor padrão para o parâmetro, evitando assim bugs
 * quando esquecemos de passar um valor para essas variáveis.
 */

function funcao1(param1 = 0, param2 = 0){
    return param1 + param2
}

console.log(funcao1(1))
console.log(funcao1(2, 3))
console.log(funcao1())


/**
 * THIS ou SELF: em JS usa-se o THIS, porém outras usam o SELF, como o Python. O this serve
 * para referenciar o objeto que está sendo executado na função. Ele pode variar e isso cau
 * -sa muita confusão. Inicialmente o this se refere sempre ao contexto global, no caso de
 * páginas web, window, e no VS, document. Porém, podemos definir o this em modo estrito
 * dentro de uma função e isso torna ele indefinido até que algo o defina.
 * 
 * Há, porém, as funções arrow. Nessas, o this não varia, ou seja, ele é definido com a função
 * e não varia mais. Isso e a sintaxe reduzida, foram os principais objetivos da criação das
 * funções arrow em 2015
 */

const pessoa = {
    nome: "Davi",
    funcao(){
        console.log(this.nome) //O contexto do this é o objeto pessoa, dono da funcão que ele foi chamado.
    }
}

pessoa.funcao()

// Tirando a função do contexto do objeto: fará com que os dados do objeto pessoa não sejam tranferidos
// juntos.

const funcao = pessoa.funcao
funcao() //Gera undefined, já que o this não se refere mais ao objeto pessoa, mas sim à função, que não tem
// nome definido

/**
 * FUNÇÃO BIND: resolve o problema indefinido acima. Ele permite importar um objeto como contexto para o this,
 * permitindo que o this esteja apontado para o objeto que foi definido incialmente
 */

const funcao_nova = pessoa.funcao.bind(pessoa) // O bind importou o contexto do objeto pessoa.
funcao_nova()

// Há quem defina uma constante self com valor this tentando limpar o código quando o this está sendo usado
// de maneira feia ou indevida. Também, podemos definir uma constante em um ambiente como self tentando evi-
// tar que o this varie ao longo do bloco.

function pessoa2(){
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) //setInterval é um método que executa infinitamente uma função com interválo de tempo em ms
}

function pessoa3(){
    this.idade = 0
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000) //setInterval é um método que executa infinitamente uma função com interválo de tempo em ms
}

new pessoa2 // = pessoa2() -> NaN NaN NaN ...
new pessoa3 // = pessoa3() -> 1 2 3 4 5 6 ...
