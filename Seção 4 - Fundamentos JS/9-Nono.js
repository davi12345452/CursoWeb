/**
 * DECLARANDO VARIÁVEIS COM O VAR:
 * Quando não estamos usando funções, independentemente de
 * quantos blocos existem, a variável var ficará visível 
 * para todo programa. Na teoria só deveria ficar para quem
 * está dentro do bloco.
 */

{
    {
        {
            {
                var variavel = "Ola Davi";
                let variavel2 = "Ola Davi";
            }
        }
    }
}

console.log(variavel) // --> Fíca visível.
// console.log(variavel2) --> ERRO, variável let não fica visível

const func = () => {
    var local = 10;
}

// console.log(local); --> ERRO, ñ está visível fora da função

/**
 * A variável VAR, quando não declarada dentro de uma função, é uma variável
 * global, ou seja, independentemente de onde for declarada, ela sempre es-
 * tará visível para todos. Esse é o problema de usar var ao invés de let 
 */

// Exemplo:

var numero = 10;
{
    var numero = 20;
    console.log(numero)
}
console.log(numero); //Imprime o último a ser declarado, já que é uma variá-
// vel global