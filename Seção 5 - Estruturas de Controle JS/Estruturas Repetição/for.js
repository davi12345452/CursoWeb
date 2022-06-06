/**
 * ESTRUTURA FOR: estrutura de repetição com quantidade
 * de repetições determinada
 */

const MÁXIMO = 10

for(let contador = 0; contador < MÁXIMO; contador++ ){
    console.log(contador)
}

// O contador vai atribuir de 1 em 1 até chegar em 10. Há uma quantidade
// determinada de repetições. Poderíamos fazer em while, porém é mais ló
// gico usar a estrutura feita para isso.

let contador2= 0
while(contador2< 10){
    console.log(contador2);
    contador2++;
}
