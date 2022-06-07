/*
 * Programa que recebe de entrada 3 lados de um triângulo e define
 * como saída se eles são Escaleno, Isósceles ou Equilátero 
 */

function tipo_triangulo(l1, l2, l3){
    if(l1 == l2 == l3){
        console.log("EQUILÁTERO")
    }else if(l1 != l2 && l1 != l3 && l2 != l3){
        console.log("ESCALENO")
    }else{
        console.log("ISÓSCELES")
    }
}

tipo_triangulo(1, 2, 4)
tipo_triangulo(1, 1, 1)
tipo_triangulo(2, 2, 4)