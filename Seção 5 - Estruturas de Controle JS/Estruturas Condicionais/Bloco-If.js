/**
 * Revisão estrutura if: é uma estrutura condicional básica,
 * o importante é observar a sintaxe, que utiliza () e um
 * bloco.
 */

function test(const1, const2){
    if(const1 > const2){
        return true
    }
    else{
        return false
    }
}


console.log(test(1, 3))
console.log(test(2, 1))
console.log(test(2, 1) && test(1, 3)) //True and false -> False

//Podemos fazer com um valor só, aí o compilador js terá de interpretar
//se o único dado é true or false.

const test2 = function(param1){
    if(param1){
        console.log(param1)
    }
}

const par1 = "" //String vazia significa false
const par2 = "Davi"
const par3 = 0 //0 siginfica false
const par4 = 1

test2(par1) //False, string vazia = False
test2(par2) //True
test2(par3) // False
test2(par4) // True