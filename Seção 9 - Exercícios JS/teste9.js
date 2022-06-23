/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
 * quantidade especificada no parâmetro.
 */

const maisString = n => {
    minhaString = ''
    for(let i = 0; i < n; i++){
        minhaString = `${minhaString}+`
    }
}

console.log(maisString(2))