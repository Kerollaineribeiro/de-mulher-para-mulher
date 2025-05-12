// index.js
const express = require('express');
const app = express();
const PORT = 3000;

const direitos = require('./data/direitos.json');
const locais = require('./data/locais-seguros.json');
const contatos = require('./data/contatos-de-emergencia.json');

app.use(express.json());

// Endpoint 1: Direitos da mulher
app.get('/direitos', (req, res) => {
  res.json(direitos);
});

// Endpoint 2: Locais seguros
app.get('/locais-seguros', (req, res) => {
  res.json(locais);
});

// Endpoint 3: Botão de emergência
app.post('/emergencia', (req, res) => {
  const { localizacao } = req.body;

  // Simula envio de alerta
  console.log('📢 Alerta enviado para contatos de emergência!');
  contatos.forEach(contato => {
    console.log(`Mensagem enviada para ${contato.nome} (${contato.telefone}): Localização: ${localizacao}`);
  });

  res.status(200).json({ mensagem: 'Alerta de emergência enviado com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
