const fs = require('node:fs') //apartir de node 16, se recomienda usar el prefijo node: para importar modulos nativos de node
const { isSymbol } = require('node:util')

const stats = fs.statSync('./archivo.txt')
console.log(stats.isFile()) //true
console.log(stats.isDirectory()) //false
console.log(stats.size) 
console.log(stats.isSymbolicLink()) //false;