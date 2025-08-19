const http = require('http');

http.createServer((req, res) => {
    res.write("Olá Mundo");
    res.end();
}).listen(3000);

console.log("LIGOU O SERVERRRRRRR")

