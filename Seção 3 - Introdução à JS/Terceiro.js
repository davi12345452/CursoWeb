/*
Criando variáveis e mexendo em dados.
*/

var quantidade = 10; 

/* 
Defini que a variável quantidade tem valor 10, ou
que o local da memória em que há esse 10 armazenado
pode ser chamado por quantidade, endereçado por essa
string.
*/

var c = false // Usamos o false para definir uma variável vazia.

variavel = "Oi eu sou uma variável" // É possível criar assim, porém há algumas exceções.

/*
FORMA USUAL E MAIS MODERNA:
let VARIÁVEL = DADO;
*/

let preco = 10.234;
let idade = 56;
let nome = "Will";
let bool = True;

/*
É convencionalmente errado definir variáveis sem var ou let, devemos
usar essa sintaxe somente para atribuir novos valores à variáveis.
*/

novo_preco = 80; // -> ERRADO
{
    let n_preco = 60 // -> CORRETO, ignorando os {}, usei só para ficar mais claro
    n_preco = 80
}
