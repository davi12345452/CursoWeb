/*
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
 */

const j_simples = (capital, juros, tempo) => {
    Valor_final = (capital * (juros/100) * tempo) + capital
    return Valor_final.toFixed(2)
}

const j_composto = (capital, juros, tempo) => {
    Valor_final = capital * (((juros/100) + 1)**tempo)
    return Valor_final.toFixed(2)
}

console.log(`Simples: ${j_simples(1000, 40, 2)}\nComposto: ${j_composto(1000, 40, 2)}`)