/**
 * USANDO VAR E LET EM LOOP:
 * O var irá continuar existindo depois que acabar o loop
 * já o let não
 */

for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i); //Funciona pq o var é uma variável global

for(let c = 0; c < 10; c++){
    console.log(c);
}
//console.log(c); //Gera erro pq o let está somente dentro do loop

// Erro dentro das funções:

const func = []
for(let a = 0; a < 10; a++){
    func.push(function(){
        console.log(a);
    })
}

func[1](); // --> Com var = 10, com let = 1
func[2](); // --> Com var = 10, com let = 2
func[3](); // --> Com var = 10, com let = 3
func[4](); // --> Com var = 10, com let = 4