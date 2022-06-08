/**
 * CONTINUAÇÃO DE HERANÇA:
 * 
 * super.ALGO --> Assim como o this, o super é usado para referenciar algo, no seu caso,
 * ele é usado para referenciar o prototype do objeto em que ele é chamado. 
 */

 const Carro = {
    v_atual: 0,
    v_max: 200,
    acelerar(aumento){
        if(this.v_atual + aumento <= this.v_max){ //Importante usar o this para chamar novos valores depois
            this.v_atual += aumento
        }else{
            this.v_atual = this.v_max
        }
    },
    status(){
        return `${this.v_atual}km/h de ${this.v_max}km/h máxima`
    }

}

const Ferrari = {
    modelo: "F10",
    v_max: 400
}

const Volvo = {
    modelo: "V10",
    status(){
        return `${this.modelo}: ${super.status()}` //Super vai chamar a função status do prototype e não a do objeto
    }
}

// Object.setPrototypeOf(A, B) -> define B como prototype de A;

Object.setPrototypeOf(Ferrari, Carro) // -> carro é o protótipo de ferrari
Object.setPrototypeOf(Volvo, Carro) // -> carro é o protótipo de volvo

//console.log(Ferrari.__proto__)
//console.log(Volvo.__proto__)

Ferrari.acelerar(100)
console.log(Ferrari.status())
Ferrari.acelerar(13)
console.log(Ferrari.status())
Ferrari.acelerar(-29)
console.log(Ferrari.status())
