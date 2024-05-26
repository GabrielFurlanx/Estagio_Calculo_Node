
// Gerenciar as requisições, rotas...
const express = require("express");

// chamar a função express
const app = express();

const path = require('path');

const bodyParser = require('body-parser');

const mysql = require('mysql');

// importar do models
const ValoresLaudo = require('./db/models/valoreslaudo');

// Criar o middleware para receber os dados no corpo da requisição via json
app.use(express.json());

app.use(bodyParser.json());

//testar a conexão com o banco de dados
const db = require("./db/models")

// Fazer com que o telaCalculo funcione o html, css e js
app.use('/calculo', express.static(path.join(__dirname, 'view', 'telaCalculo')));
app.use('/css', express.static(path.join(__dirname, 'view', 'telaCalculo', 'css')));
app.use('/javascript', express.static(path.join(__dirname, 'view', 'telaCalculo', 'javascript')));


// Incluir as controllers
//const users = require("./controller/users");


app.use(express.static(path.join(__dirname, 'public')));




// Rota para lidar com a página gerar.html
app.get('/gerar', (req, res) => {
  // Verifica se há parâmetros enviados via URL
  if (req.query.input1 && req.query.input2 && req.query.input3 && req.query.input4 && req.query.indice0) {
      // Recebe os valores dos parâmetros
      const input1 = req.query.input1;
      const input2 = req.query.input2;
      const input3 = req.query.input3;
      const input4 = req.query.input4;
      const indice0 = req.query.indice0;

      // Você pode fazer qualquer processamento adicional aqui, como armazenar os valores em um banco de dados ou realizar cálculos

      // Exemplo de envio de resposta com os valores recebidos
      res.send(`
          <h1>Valores Recebidos:</h1>
          <p>Valor da classe input1: ${input1}</p>
          <p>Valor da classe input2: ${input2}</p>
          <p>Valor da classe input3: ${input3}</p>
          <p>Valor da classe input4: ${input4}</p>
          <p>Valor da classe indice0: ${indice0}</p>
      `);
  } else {
      // Se não houver parâmetros enviados, envia uma mensagem de erro
      res.send('<h1>Nenhum parâmetro enviado.</h1>');
  }
});





app.use(express.static(path.join(__dirname, 'view', 'telaInicio')));

// Rota para servir o arquivo HTML específico
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'view', 'telaInicio', 'html', 'inicio.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Erro ao enviar o arquivo:', err);
            res.status(500).send('Erro ao enviar o arquivo');
        }
    });
});



app.get('/calculo', (req, res) => {
    const filePath = path.join(__dirname, 'view', 'telaCalculo', 'html', 'calculo.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Erro ao enviar o arquivo:', err);
            res.status(500).send('Erro ao enviar o arquivo');
        }
    });
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para lidar com solicitações POST para /calculo
app.post('/calculo', (req, res) => {
    // Extrair os dados do corpo da solicitação
    const { inputs, indices, IPA, PP } = req.body;
  
    // Inserir os dados no banco de dados
    const queryString = 'INSERT INTO sua_tabela (input1, input2, input3, input4, indice, IPA, PP) VALUES ?';
    const values = inputs.map((input, index) => [...input, indices[index], IPA, PP]);
  
    connection.query(queryString, [values], (error, results, fields) => {
      if (error) {
        console.log('Erro ao inserir dados no banco de dados:', error);
        res.status(500).json({ error: 'Erro ao inserir dados no banco de dados' });
      } else {
        console.log('Dados inseridos com sucesso no banco de dados');
        res.json({ success: true });
      }
    });
  });




// Iniciar o servidor na porta 8080, criar a função.
app.listen(8080, () => {
    console.log("Servidor rodando no link: http://localhost:8080/");
});



