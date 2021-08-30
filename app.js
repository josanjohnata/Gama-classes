// Incluindo uma biblioteca
// const http = require('http');

// const url = require('url');
// const queryString = require('query-string');

// Definição de endereço / URL
// const hostname = '127.0.0.1'; // localhost
// const port = 3000;

// Implementação da regra de negócio
// const server = http.createServer((req, res) => {

  //Pegar a pergunta na url
  // const params = queryString.parse(url.parse(req.url, true).search);
  // console.log(params);

  //Verificar a pergunta e escolher uma resposta
  // let resposta;
  // if(params.pergunta === 'melhor-filme') {
  //   resposta = 'star wars';
  // } 
  // else if(params.pergunta === 'melhor-tecnologia') {
  //   resposta = 'node js';
  // }
  // else {
  //   resposta = 'Não sei, desculpe :( ';
  // }

  //Retorna a resposta escolhida.

  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World!')

  // res.end(resposta);
// });

// Execução

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




// Prática de desenvolvimento em JavaScript

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello world");
});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
})