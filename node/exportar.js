console.log(module.exports === this) //São duas maneiras de exportar variávies, funções de um módulo para outro, logo é True

console.log(module.exports === exports && exports === this) //somente o exports é outra maneira de exportar dados de um módulo a outro