// Incluir as bibliotecas
// Gerenciar as requisições
const express = require('express');

//chama a função express
const router = express.Router();

//Incluir o arquivo que posui a conexão com o banco de dados
const db = require('./../db/models');


router.post("/calculo", async (req, res) => {
    var dados = req.body;
    console.log(dados);

});


module.exports = router;
