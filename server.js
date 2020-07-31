const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// INICIANDO O APP
const app = express();

// ENVIAR PARA APLICAÇÃO NO FORMATO JSON
app.use(express.json());
// LIBERAR ACESSO A APLICAÇÃO PUBLICAMENTE
app.use(cors());

// INICIANDO O DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ 
	useNewUrlParser: true, 
	useUnifiedTopology: true 
});
// PEGAR O MODELO DINAMICAMENTE
requireDir('./src/models');

// ROTAS
app.use('/api', require('./src/routes'))

app.listen(3001);