// Importa o módulo nativo HTTP do Node.js
const http = require('http');

// Define o endereço e a porta
const hostname = '127.0.0.1';
const port = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Sucesso!
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Olá! Seu servidor Node.js está rodando com sucesso. 🚀');
});

// Inicia o servidor e avisa no console
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});