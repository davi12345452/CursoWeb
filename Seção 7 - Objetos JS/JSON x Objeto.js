/*
 * JSON vs Objeto: JSON é um formato textual que carrega os dados, o objetivo
 * é ser universal, ou seja, eu poder programar através de js, dar de saída um
 * objeto em JSON, que vai ser usado sla, em Python. É um formato de texto muito
 * simples de ser interpretado pelas linguagens, assim temos um formato de dado
 * universal.
 */

// Transformando um OBJETO em JSON:

const obj = { a:1, b:2, c:3, soma(){return a + b + c}, d:5 }
console.log(JSON.stringify(obj)) // Vale notar, que funções não são devolvidas no JSON já que ele devolve dados e não execuções.

// Transformando um JSON em OBJETO.js:

const obj_json = JSON.stringify(obj) // -> "{ a:1, b:2}" != {"a":1, "b":2}, segundo é formato JSON (a chave deve estar em aspas duplas)
console.log(JSON.parse(obj_json)) // A função se exclui na tradução para JSON, logo, no contrário ela não vai aparecer.

// Json suporta arrays e objetos, string deve estar entre aspas, equanto booleano e number não precisa