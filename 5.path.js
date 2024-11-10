const path = require('node:path');

console.log(path.sep); // <---- imprime el separador de rutas de archivos en el sistema operativo actual

//unir carpetas con path.join
const filePath = path.join('carpeta', 'subcarpeta', 'archivo.txt'); // <---- une las partes de una ruta de archivo
console.log(filePath); // <---- imprime la ruta de un archivo en el sistema operativo actual

const baseArchivo = path.basename('/documents/programacion/path.js'); // <---- obtiene el nombre del archivo de una ruta de archivo
console.log(baseArchivo); // path.js

//quitando la extensión del archivo
const quitaExtension = path.basename('/documents/programacion/path.js', '.js'); // <---- obtiene el nombre del archivo de una ruta de archivo sin la extensión
console.log(quitaExtension); // path

//obteniendo la extensión del archivo
const obtenExtension = path.extname('/documents/programacion/path.js'); // <---- obtiene la extensión de un archivo de una ruta de archivo
console.log(obtenExtension); // .js

