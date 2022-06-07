/*
 * FUNÇÃO ARROW: modo de declarar função visando uma melhor utilização do this e menor sintaxe.
 */

// Escrevendo normal:

let funcao = function(a){return a * 2}
console.log(funcao(2))

// Escrevendo como arrow:

funcao = a => a * 2 //Entre o = e => é os parâmetros, depois do => é o bloco.
console.log(funcao(2))

/*
 * O uso de funções arrow se tornam importantes na definição de pequenas funções.
 * O uso de pequenas ao invés de poucas grandes é encorajado.
 */

 function pessoa(){
    this.idade = 0
    setInterval(() => { //Graças às funçoes arrow, em que o this não é variável, a execução do this é perfeita.
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)}


/*
 * Comparando contextos com o this
 */

let Compara_com_this = function(par){
    console.log(this === par)
}
Compara_com_this(global) //Vai ser true, o this ele está no escopo global

// Agora usando funções arrow:

Compara_com_this = (par) => console.log(this === par)
Compara_com_this(global) //False.


