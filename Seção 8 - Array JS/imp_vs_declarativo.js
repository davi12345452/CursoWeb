/*
 * IMPERATIVO VS DECLARATIVO: diferenças entre uma abordagem declarativa e uma abordagem
 * imperativa. A abordagem imperativa é mais direta, ou seja, sem função, código direto,
 * já a declarativa busca usar sempre funções criadas ou métodos existentes.
 */

const array = [1, 2, 4, 6, 7, 8]

// Imperativa:

let total1 = 0
for(i in array){
    total1 += array[i]
}
console.log(total1)

// Declarativa:

const soma= (acum, atual) => acum + atual
const total2 = array.reduce(soma)
console.log(total2)

/*
 * A abordagem declarativa será mais vantajosa pelo fato de podermos re-usar
 * as função definidas. A imperativa, se formas re-usar as mesma estruturas, 
 * ou iremos repetir linhas de código iguais, ou usaremos tudo junto e fica-
 * rá uma bagunça.
 * 
 * Podemos dizer que a abordagem imperativa se preocupa mais em como fazer
 * algo, enquanto a declaritiva com o que tem que ser feito, independente-
 * mente de como irá fazer isso. 
 * 
 * A abordagem declarativa, usa funções minimalistas, que permitem o re-uso,
 * manutenção facilitada e leitura facilitada do código. -> MELHOR OPÇÃO
 */