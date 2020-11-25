const fs = require('fs')
const ex = require('./files/example')

let test = new ex

test.imprime(['Helder ', 'Miguel', 'Marinalva'])

// const content = `class ModuloDeImpressao {
//   constructor() {
//     this._codigo = 10;
//   }
//   imprime(nomes) {
//     nomes.forEach(nome => {
//       console.log(\`\${this._codigo}: \${nome}\`);
//     });
//   }
// }
// module.exports = ModuloDeImpressao;`

// fs.writeFile('./files/example.js', content, function (err) {
//   console.log(err ? 'erro' : 'Arquivo Criado')
// })

// Referencias
// https://medium.com/@thihenos/node-crud-arquivos-142e3fb1892d
// https://github.com/sindresorhus/detect-indent
// https://www.npmjs.com/package/node-minify
