/*
 * Bloco if/else if/else: o else if funciona basicamente como um
 * case dentro de um switch, é para quando há mais que 2 condições,
 * por exemplo, definir conceitos com base na note, sendo que há
 * A, B, C, D de conceitos, com if e else não é possível. Posso
 * colocar inúmeros else if, desde que haja um if no início e um
 * else no fim. 
 */

 function test(const1, const2){
    if(const1 > const2){
        console.log("MAIOR")
    }
    else if(const1 < const2){
        console.log("MENOR")
    }
    else{
        console.log("IGUAL")
    }
}


// O else if não é algo junto, mas sim separado e para ser dentro do bloco if
// mais ou menos como C, porém, sendo JS pouco tipado, não é precisa toda identação

test(1, 2)
test(2, 1)
test(1, 1)