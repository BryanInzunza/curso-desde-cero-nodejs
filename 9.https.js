const http = require('node:http')

const server = http.createServer((req, respuesta) =>{
   console.log('request received');
   res.end('Hola mundo') 
    
})

server.listen(3000, () => {
    console.log('server listening on port 3000')
})