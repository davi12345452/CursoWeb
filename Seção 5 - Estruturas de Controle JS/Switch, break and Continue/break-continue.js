/**
 * ESTRUTURA BREAK E CONTINUE: estruturas usadas para quebrar ou continuar
 * um bloco de códigos. São estruturas em que o uso é combatido, já que alteram
 * o fluxo do programa e isso pode trazer bugs.
 * O break quebra o laço, enquanto o continue, ele pula para a próxima repetição
 * já que ele só pode ser usado em for ou while
 */
 
const lista = [1, 2, 3, 5, 6, 78, 8, 5, 2, 42]

for(i in lista){
    if(i == 7){
        console.log("BREAK")
        break
    }
    if(i == 3){
        console.log("PULOU")
        continue
    }
    console.log(lista[i])
}