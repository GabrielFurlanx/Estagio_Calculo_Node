// Incluir as bibliotecas
// Gerenciar as requisições
const express = require('express');

//chama a função express
const router = express.Router();

//Incluir o arquivo que posui a conexão com o banco de dados
const db = require('./../db/models');


//Criar a rota lista
router.get("/users", async (req, res) => {

    // Receber o numero da página, e quando não é enviado o número da pagina
    // é atribuido a página 1

    const { page = 1 } = req.query;
    console.log(page);

    //recuperar todo os usuários do banco dedos
    const users = await db.Users.findAll({
            //Indicar quais colunas recuperar do banco de dados
        attributes: ['id', 'name', 'email'],
        
        //Ordenar os registros pela coluna id da forma decrescete
        order: [
            ['id', 'DESC']
        ]
    });





    if(users){
        // Pauar o processamento e retornar os dados em formato de objeto
        return res.json({
            users
        }); 
    } else {
        // Pauar o processamento e retornar a mensagem de erro
        return res.status(400).json({
            mensagem: "Erro: Usuarioss não cadastrados",
        });
    }
});





//criar a rota cadastrar, recebe atraves do req, e envia atraves do res
router.post("/users", async (req, res) => {
    // Receber oss dados enviado no corpo da requiição
    var dados = req.body;
    console.log(dados);
    

    //Salvar no banco de dados
    await db.Users.create(dados).then((dadosUsuario) => {
        //Pausar o preocessamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Usuario cadastrado com sucesso",
            dadosUsuario
        });
    }).catch(() => {
        return res.json({
            mensagem: "Falha ao cadastrar o usuario",
        });
    });
});




//Exportar a instrução que esta dentro da constante router

module.exports = router;