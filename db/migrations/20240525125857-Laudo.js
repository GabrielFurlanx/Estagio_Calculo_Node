'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Laudo', {
      idLaudo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_medico: {
        type: Sequelize.STRING
      },
      data_entrada: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      data_emissao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      cpf_paciente: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tipo_Laudo: {
        type: Sequelize.INTEGER,
      },
      nome_crianca: {
        type: Sequelize.STRING,
      },
      item_paciente: {
        type: Sequelize.STRING,
      },
      valores_referencia: {
        type: Sequelize.STRING,
      }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllTables('Laudo');
  }
};
