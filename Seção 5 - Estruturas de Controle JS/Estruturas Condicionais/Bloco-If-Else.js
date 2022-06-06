/**
 * Bloco IF/ELSE: revisão do básico.
 */


 function test(const1, const2){
    if(const1 > const2){
        console.log("acerto")
    }
    else{
        console.log("erro")
    }
}

test(10, 20)
test(10, 2)

// Há um erro, por JS ser fracamente tipada, usar outros tipos pode
// significar simplesmente false ao compilador, ao invés de erro

test("Davi", 10) //Certo seria dar erro