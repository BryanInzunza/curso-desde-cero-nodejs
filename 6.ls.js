const fs = require('node:fs')

fs.readdir('.', (err, files) =>{ //lee el contenido del directorio actual
    if (err) {
        console.log('Error al leer el directorio:', err)
        return;
    }
    files.forEach(file => {
        console.log(files);
    })
})  