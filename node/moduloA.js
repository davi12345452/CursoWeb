/* Maneiras de exportar variáveis por outros módulos */

this.ola = 'Fala Pessoal' //Usando o this, podemos acessar de outro módulo
exports.ola2 = 'Fala Pessoal' //O exports funciona da mesma maneira
module.exports.ola3 = 'Fala Pessoal' //Maneira mais comum