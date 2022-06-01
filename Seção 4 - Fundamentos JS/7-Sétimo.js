/**
 * TIPO OBJECT: é uma estrutura de chave valor, o equivalente
 * ao dicionário em Python.
 */

const my_object = {};
my_object.nome = "Objeto"; //Eu atribui o conteúdo Objeto à chave nome
my_object.valor = "18"; //Eu atribui o valor 18 à chave valor`

console.log(my_object)

// Podemos declarar os valores juntos

const my_object2 = {
    nome: "Davi",
    idade: 20,
    ensino: "Superior",
    sexo: "Masculino",
    fisico:{
        cabelo: "Loiro",
        altura: "1.81",
        peso: 80
    }
}

// Posso ficar fazendo essas árvores com um objeto.