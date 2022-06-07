/**
 * FUNÇÃO AUTO-INVOCADA: função que é executada assim que declarada.
 * Não precisa ser chamada. Immediately Invoked Function Expression
 */

(function(){
    console.log("Executa na hora") //Executa sem ser chamada
    console.log("Evita o escopo mais abrangente")
})() //Esse () meio que chama a função.
