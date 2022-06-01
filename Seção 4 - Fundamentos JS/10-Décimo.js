/**
 * DECLARANDO VARIÁVEIS COM LET: é uma variável não global, ou seja, se for
 * declarada dentro de um bloco ela só valerá naquele escopo.
 */

var numero = 1;
{
    let numero = 2; //Substitui o var
    console.log("Dentro:"+ numero);
}
console.log("Fora:"+ numero) //O let só vale dentro do bloco