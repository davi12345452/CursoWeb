/**
 * ESTRUTURA SWITCH: é uma estrutura usada quando há mais 
 * condições em uma estrutura condional, no caso cases. Por
 * exemplo, um sistema de atribuição de conceitos com base 
 * em notas...
 */

const test = function(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log("10")
            break
        case 9:
            console.log("9")
            break
        case 8:
            console.log("8")
            break

    }
}

// Em js, o switch precisa do break para sair, senão ele executa os abaixos

test(7)
test(8)
test(10)
test(11)

// O switch ignora valores que ele não possui chamada. 

/**
 * O switch em JS é bem básico, se quisermos atribuir no último caso um sistema
 * de conceitos, faríamos dessa maneira:
 */

const test2 = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log("A")
            break
        case 8: case 7:
            console.log("B")
            break
        case 6:
            console.log("C")
            break
        case 5: case 4: case 3: case 2: case 1: case 0:
            console.log("D")
            break
        default:
            console.log("Nota Inválida") //Meio que o else do switch
    }
}

test2(1.6)
test2(5.9)
test2(7.9)
test2(6.1)
test2(6)
test2(8.9)
test2(11)

/**
 * Comando break não é exclusivo do switch, mas sim um comando 
 * geral para a saída de blocos, interromper um bloco, assim, 
 * como ele está dentro do bloco switch, o break quebra este.
 */