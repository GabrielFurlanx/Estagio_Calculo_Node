
// normatiza o código
'use strict';

//Incluir o arquivo com as variaveis de ambiente

require('dotenv').config();

// Permite trabalhar com o sistema de arquivos do computador
const fs = require('fs');
// Fornece utulitarios para trabalhar com caminhos de arquivos
const path = require('path');
// Sequelize é um ORM para Node.js, que tem uporte para varios bancos de dados 
// ORM é um mapeamento objeto-relacional, tabelas do banco de dados são representados
//em classes e os registros das tabelas seriam instancias dessas classes
const Sequelize = require('sequelize');
//Permite obter informações do processo na pagina atual
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV  ||  'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};


// Cria a variavel que recebe a conexão com o banco de dado
let sequelize;
// verifica qual configuração de banco de dados voce deseja usar
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Usar as configurações do arquivo "config/database.js"
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Verificar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch(error => {
    console.error("ERRO: falha ao conectar", error);
  });

// Indentifica o MODEL
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Atribuir a conexão com o banco de dados para o objeto db
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Exportar a instrução que está dentro da constante db
module.exports = db;
