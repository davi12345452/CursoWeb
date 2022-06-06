/**
 * ESTRUTURA IN EM FOR: é uma estrutura usada para percorrer obejto ou array, muito utilizado
 * em python, em js existem maneiras mais eficientes. Você pega um array de 10 termos e joga
 * um for in, ele irá percorrer através do index cada um desses dados e realizar operações
 * desejadas.
*/

const minhas_notas = [10, 9.8, 6.7, 7.4, 5.43]
for(i in minhas_notas){
    console.log("Nota ", i,":", minhas_notas[i])
}

