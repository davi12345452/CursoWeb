/**
 * Continuando a revisão de IF: que nem C, se a sentença condicional
 * tiver um comando só dentro do bloco, não é preciso abri-lo
 */

 function test(const1, const2){
    if(const1 > const2)
        return true
        console.log('Erremo') 
}

/**
 * Caso houvesse mais códigos dentro do if sem {}, eles seriam considerados
 * fora do if e executados sem nenhuma condição, mas normalmente. 
 */

console.log(test(100,200)) //Não teria que devolver nada, porém passa o Erremo,
// já que está fora do if

//Interessante notar que JS não liga para identação, mas para quem está ou não
// dentro do bloco. Python já é o contrário.