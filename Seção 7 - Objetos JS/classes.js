/**
 * CLASSES: as classes não são muito importantes em js pq ela é uma função no final
 * e ja usamos funçoes para criar objetos. No fim, é só um jeito diferente de criar
 * objeto por função. Maneira alternativa para trabalhar com funções construtoras
 */

class Lancamento {
    constructor(nome = "generico", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamento = []
    }

    addlancamento(...Lancamento){
        Lancamento.forEach(l => this.Lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.Lancamento.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("salario", 30000)
const conta_de_luz = new Lancamento("luz", -500)
const conta_de_agua = new Lancamento("agua", -120)

const contas = new CicloFinanceiro(05, 2022)
contas.addlancamento(salario, conta_de_agua, conta_de_luz)
console.log(contas.sumario())


// Gerando Prototype em classe: é diferente da sintaxe usada em objetos.
// Usando herança em classe:

class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{   // A função extends que cria vínculo entre as classes, criando assim, um prototype
    constructor(sobrenome, nome = "Padrão"){
        super(sobrenome) // Usa-se o super para identificar qual dado será "herdado"
        this.nome = nome
    }   // A ordem importa muito, o argumento do super deve ser o primeiro, assim como o super.
}

class Filho extends Pai{
    constructor(){
        super('Maia')
    }
}

const filho = new Filho
console.log(filho)