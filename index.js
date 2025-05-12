// index.js
const http = require('http');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Olá, mundo! Meu primeiro projeto Node.js no GitHub!');
});

servidor.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
