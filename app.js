// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {

  //Pegar a pergunta na url
  const params = queryString.parse(url.parse(req.url, true).search);
  console.log(params);
  //Verificar a pergunta e escolher uma resposta
  //Retorna a resposta escolhida.

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});