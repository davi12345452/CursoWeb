/**
 * CONTEXTO LÉXICO: a ordem como o código foi escrito pode sim ter interferência
 * na declaração de variáveis
 */

const valor = "Global"

function imprime(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    imprime()
}

exec() //Imprime global e não local pelo contexto léxico que imprime foi definida