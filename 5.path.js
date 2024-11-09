const path = require('node:path');

console.log(path.sep); // <---- imprime el separador de rutas de archivos en el sistema operativo actual

const filePath = path.join('carpeta', 'subcarpeta', 'archivo.txt'); // <---- une las partes de una ruta de archivo
console.log(filePath); // <---- imprime la ruta de un archivo en el sistema operativo actual