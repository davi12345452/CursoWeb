/*
 * CLOSURE: é o escopo criado quando uma função é declarada,
 * esse escopo permite a função acessar e manipular variáveis
 * externas à função.
 */

const valor = "Global"

function fora(){
    const valor = "Local"
    function dentro(){
        return valor
    }
    return dentro
}

const funcao = fora()
console.log(funcao()) //Devolve local pois dentro foi definido dentro do escopo que havia a declaração "local"