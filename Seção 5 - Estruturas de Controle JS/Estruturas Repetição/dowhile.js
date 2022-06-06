/**
 * ESTRUTURA DO WHILE: é um while invertido, ele permite que haja pelo menos
 * uma repetição, caso a condição do while não esteja sendo atendida, no While
 * caso a condição não esteja sendo atendida, ele não executa.
 */

const Numero_Condicao = 1
let Numero_Condicao2 = 0

do {
    console.log("oI")
} while (Numero_Condicao != 1);

do {
    console.log("Oi")
    Numero_Condicao2 += 1
} while (Numero_Condicao2 != 2);

// Preferível usar o While, não muda nada o Do While, apenas confunde e traz
// mais coisas para decorar uso.