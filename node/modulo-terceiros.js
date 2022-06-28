/* Usando ferramentas exportadas de terceiros */

const _ = require('lodash') //Vai procurar o index.js dentro de lodash
setInterval(() => console.log(_.random(1, 1000)), 1000)
// Executa a função com random exportado de lodash de 1 em 1s, infinitamente
