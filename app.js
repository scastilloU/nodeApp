
// Establecer la constante del protocolo 
const http = require("http");

// Establecer la constante de hostname y el puerto donde se va a mostrar la respuesta
const  hostname = "127.0.0.1";
const port = 8080;


//creamos el servidor usando el protocolo
const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("content-type", "text/plain");
    res.end("Hello, Desde Node JS");
});

// Start the server
server.listen(port,hostname, () => {

    console.log(`El servidor esta corriendo en http://${hostname}:${port}`);

});


