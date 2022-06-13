/* 
 * MÉTODO CONCAT: usado para unir dois arrays.
 * ARRAY1.concat(ARRAY2) -> ARRAY1 + ARRAY2
 */

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const array3 = array1.concat(array2, [7, 8], 9, [[10]]) // -> Permite infinitos argumentos

console.log(array3) //-> [1, 2, 3, 4, 5, 6, 7, 8, 9, [10]]