/**
 * FUNÇÕES CONSTRUTORAS: basicamente funciona como uma
 * classe em outras linguagens. Existem atributos in-
 * ternos, porém com métodos(funções) públicas.
 */

function Carro(v_maxima = 200, delta = 5){
    //atributo privado:
    let v_atual = 0

    //método público: Como é função não arrow, o this é global.
    this.acelerar = function(){
        if(v_atual + delta < v_maxima){
            v_atual += delta
        }else{
            v_atual = v_maxima
        }
    }

    //método_público: devolver velocidade atual do carro
    this.get_v_atual = function(){
        return v_atual
    }
}

// Criando carros:

const Uno = new Carro
Uno.acelerar()
Uno.acelerar()
console.log(Uno.get_v_atual())
Uno.acelerar()
console.log(Uno.get_v_atual())

const Porsche = new Carro(400, 20)
Porsche.acelerar()
Porsche.acelerar()
console.log(Porsche.get_v_atual())
Porsche.acelerar()
console.log(Porsche.get_v_atual())

//Basicamente estamos construindo objetos. Estamos falando de POO pura do JS.
//A classe é menos eficiente do que função em JS.
// A função construtura nada mais é que uma classe que constroi objetos.